import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h1>Categories</h1>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <NavLink to="products/men"> Men</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="products/women"> Women</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="products/teenager"> teenager</NavLink>
            </li>
            <li className={styles.navItem}>
              <NavLink to="products/Accessories"> Accessories</NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.item}>
          <h1>About</h1>
          <span>
            Welcome to our E-commerce platform, a seamless blend of technology
            and fashion designed to elevate your shopping experience. Our
            project is a full-stack E-commerce application that leverages the
            power of React for a dynamic and responsive frontend, Redux for
            state management, and Strapi for a robust backend API.
          </span>
        </div>
        <div className={styles.socialIcons}>
          <p>you can find us in</p>
          <div className={styles.icons}>
            <a
              href="mailto:abdulmajeedtawfiq98@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <EmailIcon />
            </a>
            <a
              href="https://linkedin.com/in/abdulmajeed-tawfik"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/Abdulmajeed-Tawfiq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://t.me/Abdulmajeed234"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.text}>
          <div className={styles.copyright}>
            <span className={styles.name}>Tawfik Store</span>© Copyright 2024.
            All Rights Reserved
          </div>
        </div>
        <div className={styles.pay}>
          <p>you can pay with</p>
          <img src="/images/payment.png" alt="payment" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
