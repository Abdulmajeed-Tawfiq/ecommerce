import styles from "./about.module.css";

function About() {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <span>About </span>
        Welcome to our E-commerce platform, a seamless blend of technology and
        fashion designed to elevate your shopping experience. Our project is a
        full-stack E-commerce application that leverages the power of React for
        a dynamic and responsive frontend, Redux for state management, and
        Strapi for a robust backend API. Our platform is meticulously crafted to
        provide a user-friendly interface, making it easy for customers to
        browse through our extensive range of products, from the latest fashion
        trends to essential accessories. We pride ourselves on our commitment to
        quality and customer satisfaction, ensuring that every purchase is a
        delightful experience. Our team is dedicated to staying at the forefront
        of E-commerce innovation, continuously enhancing our platform to meet
        the evolving needs of our customers. Join us as we redefine online
        shopping, making it not just convenient but also enjoyable.
      </p>
      <div className={styles.tech}>
        <h2>Technologies Used</h2>
        <ul>
          <li>
            <strong>Frontend:</strong> React for building the user interface,
            Redux for state management.
          </li>
          <li>
            <strong>Backend:</strong> Strapi for creating a flexible and
            scalable API.
          </li>
          <li>
            <strong>Database:</strong> PostgreSQL for storing product
            information, user data, and order details.
          </li>
          <li>
            <strong>Build Tools:</strong> Vite for fast and efficient
            development.
          </li>
          <li>
            <strong>Styling:</strong> CSS Modules for scoped styles, ensuring
            that styles are applied only to the components they are defined in.
          </li>
          <li>
            <strong>Icons:</strong> Material-UI Icons for a consistent and
            modern look.
          </li>
          <li>
            <strong>Routing:</strong> React Router for managing navigation
            within the application.
          </li>
          <li>
            <strong>Payment:</strong> Stripe for make Payments infrastructure.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
