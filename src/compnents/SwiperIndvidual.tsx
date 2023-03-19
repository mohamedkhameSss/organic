import React, { ReactNode, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { AppContext, products } from "./AppContextApi";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Grid,
  Autoplay,
} from "swiper";
import "swiper/css/navigation";
import style from "../styles/SwiperIndvidual.module.css";
import { ArrowFunction } from "typescript";

type Props = {
  children: ReactNode[];
  items: products | undefined;
  slidesPerView?: number | undefined;
  spaceBetween?: number | undefined;
  direction?: "horizontal" | "vertical";
};
const SwiperIndvidual = ({
  children,
  items,
  slidesPerView = 3,
  spaceBetween = 10,
  direction,
}: Props) => {
  // const { products } = useContext(AppContext);
  // const [dataItem, setDataItem] = useState(items);
  const cloneItems = items?.map((item, index) => (
    <SwiperSlide
      key={index}
      className={`${style["swiper-slide"]} `}
    >
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
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        breakpoints={{
          400: { slidesPerView: 1 },
          682: { slidesPerView: 2 },
          980: { slidesPerView: 3 },
          1200: { slidesPerView },
        }}
        // loop={true}
        // navigation
        navigation={{
          nextEl: '.swiper',
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          // pauseOnMouseEnter: true,
          reverseDirection: false,
        }}
        // direction={direction}
        className={`m-auto ${style.swiper} `}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {cloneItems}
      </Swiper>
    </>
  );
};

export default SwiperIndvidual;
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
