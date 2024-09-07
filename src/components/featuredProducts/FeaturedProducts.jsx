import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import Card from "../card/Card";
import SkeletonCard from "../skeletonCard/SkeletonCard";
import styles from "./FeaturedProducts.module.css";

// eslint-disable-next-line react/prop-types
function FeaturedProducts({ type }) {
  const [featuredProduct, setfeaturedProduct] = useState([]);
  const [trendingProduct, settrendingProduct] = useState([]);
  const { data, error, loading } = useFetch(`/products`);

  useEffect(() => {
    if (data) {
      setfeaturedProduct(data?.filter((product) => product?.id <= 3));
      settrendingProduct(
        data?.filter((product) => product?.id >= 13 && product?.id <= 15)
      );
    }
  }, [data]);

  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1>{type} products</h1>
      </div>
      <div className={styles.bottom}>
        {error
          ? "someThing went wrong"
          : loading
          ? Array.from({ length: 3 }).map((_, index) => (
              <SkeletonCard key={index} />
            )) // Display skeleton cards while loading
          : type === "featured"
          ? featuredProduct?.map((item) => <Card item={item} key={item.id} />)
          : trendingProduct?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
}

export default FeaturedProducts;

// Hello! I'd be happy to help you with the issue you're experiencing in your FeaturedProducts.jsx file. The problem you're describing, where the API is being called 4 times instead of once, is often related to how useEffect is being used in React components.

// To solve this, we need to look at your FeaturedProducts.jsx file. Could you please share the relevant code from this file, particularly the part where you're making the API call?

// Without seeing the code, I can offer some general advice:

// Make sure you're using the useEffect hook correctly.
// Provide an empty dependency array to useEffect if you want the effect to run only once when the component mounts.
// Check if there are any unnecessary re-renders happening in your component.
// Here's an example of how you might structure your component to call the API only once:

// import React, { useState, useEffect } from 'react';

// const FeaturedProducts = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('your-api-endpoint');
//         const data = await response.json();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts();
//   }, []); // Empty dependency array ensures this runs only once on mount

//   return (
//     // Your JSX to render the products
//   );
// };

// export default FeaturedProducts;

// Copy

// Apply

// FeaturedProducts.jsx
// If you can share your actual code, I can provide more specific guidance on how to fix the issue in your particular case.
