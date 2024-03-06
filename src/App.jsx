import { useEffect, useState } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import AllProducts from "./pages/allProducts/AllProducts";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import ContactPage from "./pages/contactPage/ContactPage";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Layout = () => {
  return (
    <div className="app">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="products/:id" element={<AllProducts />} />
      <Route path="product/:id" element={<Product />} />
    </Route>
  )
);

function App() {
  // State to track whether the button should be visible
  const [showScroll, setShowScroll] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Event listener to show the button when scrolling
  useEffect(() => {
    const checkScrollTop = () => {
      setShowScroll(window.scrollY > 400);
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  return (
    <div>
      {showScroll && (
        <button
          onClick={scrollToTop}
          className={`scroll-to-top ${showScroll ? "show-scroll" : ""}`}
        >
          <ExpandLessIcon />
        </button>
      )}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
