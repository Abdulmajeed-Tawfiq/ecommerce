import { useEffect, useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { Link } from "react-router-dom";
import styles from "./Slider.module.css";

function Slider() {
  const bannerData = [
    {
      image: "../../../public/images/man.png",
      heading: "Men's Collection",
      description: "Stylish and comfortable men's fashion for every occasion.",
    },
    {
      image: "../../../public/images/watch.png",
      heading: "Accessories",
      description: "Trendy Accessories for the modern man and woman",
    },
    {
      image: "../../../public/images/manBag.png",
      heading: "Men's Bag",
      description: "Durable and functional men's accessory.",
    },
    {
      image: "../../../public/images/womanBag.png",
      heading: "Women's Bag",
      description: "Elegant and practical woman's accessory.",
    },
  ];

  // state for handle the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // functions to move next and prev slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  // side effect to make Auto slider (get the next slide every 3 sec)
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {bannerData.map((data, index) => (
          <div
            key={index}
            className={`${styles.slide} ${styles[`slide${index}`]}`}
          >
            <div className={styles.text}>
              <h2>{data.heading}</h2>
              <p>{data.description}</p>
              <Link
                to={`${
                  data.heading === "Men's Collection"
                    ? "products/2"
                    : "products/4"
                }`}
              >
                shop now
              </Link>
            </div>
            <div className={styles.image}>
              <img src={data.image} alt="slider image" />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.icons}>
        <div className={styles.icon} onClick={prevSlide}>
          <WestOutlinedIcon />
        </div>
        <div className={styles.icon} onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
}

export default Slider;
