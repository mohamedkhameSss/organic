import React, { ReactNode, useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AppContext, products } from "./AppContextApi";
import styles from "../styles/SwiperCarosal.module.css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Grid,
  Autoplay,
} from "swiper";
import "swiper/css/navigation";
import "swiper/css/grid";
type Props = {
  children: ReactNode[];
  items: products | undefined;
  grid?: object | undefined;
};
const SwiperCarosal = ({ children, items, grid }: Props) => {
  // const { products } = useContext(AppContext);
  // const [dataItem, setDataItem] = useState(items);
  const cloneItems = items?.map((item, index) => (
    <SwiperSlide key={index} className={`${styles["swiper-slide"]}`}>
      {/* {<SingleCard name={item.name} img={item.img} />} */}
      {children[index]}
    </SwiperSlide>
  ));
  useEffect(() => {
    // document.getElementsByClassName("swiper-container"). = "100%";
  }, []);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Grid, Autoplay]}
        spaceBetween={10}
        // navigation

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          600: { slidesPerView: 2, grid: { rows: 1 } },
          1200: { slidesPerView: 2, grid: { rows: 2 } },
        }}
        className={`${styles.swiper}`}
      >
        {cloneItems}
      </Swiper>
    </>
  );
};

export default SwiperCarosal;
{
  /* <div
  class='swiper-button-next'
  tabindex='0'
  role='button'
  aria-label='Next slide'
  aria-controls='swiper-wrapper-8592ecea410285cc4'
  aria-disabled='false'
></div>; */
}
