import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { categoriesData } from "../cpnstant/Constant";
import styles from "./Slider.module.css";

function Slider() {
  // const { data } = useFetch("/categories");
  // const [bannerData2, SETbannerData2] = useState();

  // setTimeout(() => {
  //   const new2 = data?.data?.slice(0, 4)?.map((category) => ({
  //     image: category.image,
  //     heading: category.name,
  //     // description: "category.description",
  //   }));
  //   SETbannerData2(new2);
  // }, 2000);

  // state for handle the current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // functions to move next and prev slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  // side effect to make Auto slider (get the next slide every 5 sec)
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <div className={styles.slider}>
      <div
        className={styles.container}
        style={{
          transform: `translateX(-${currentSlide * window.innerWidth}px)`,
        }}
      >
        {categoriesData.map((data, index) => (
          <div
            key={index}
            className={`${styles.slide} ${styles[`slide${index}`]}`}
          >
            <div className={styles.text}>
              <h2>{data.heading}</h2>
              {/* <p>{data.description}</p> */}
              <Link
                to={data?.link}
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
