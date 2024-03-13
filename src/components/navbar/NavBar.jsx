import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
// import "./Navbar.scss";
import { useSelector } from "react-redux";
import Cart from "../cart/Cart";
import styles from "./NavBar.module.css";

function NavBar() {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <nav className={styles.container}>
      <div className={styles.left}>
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
      <NavLink className={styles.logo} to="/">
        <img src="/logo.png" alt="logo" width={100} height={50} />
      </NavLink>
      <div className={styles.right}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <NavLink to="/">HomePage</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="about">About</NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <div className={styles.icones}>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className={styles.cartIcon} onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </ul>

        {/* display on phone screen only */}
        <ul className={styles.navPhone}>
          <div className={styles.icones}>
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className={styles.cartIcon} onClick={() => setOpen(!open)}>
              <ShoppingCartOutlinedIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </ul>
      </div>
      {open && <Cart />}
    </nav>
  );
}

export default NavBar;
