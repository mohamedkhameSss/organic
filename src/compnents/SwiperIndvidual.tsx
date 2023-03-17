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
import { ArrowFunction } from "typescript";

type Props = {
  children: ReactNode[];
  items: products | undefined;
  slidesPerView?: number | undefined;
  spaceBetween?: number | undefined;
};
const SwiperIndvidual = ({
  children,
  items,
  slidesPerView = 3,
  spaceBetween = 25,
}: Props) => {
  // const { products } = useContext(AppContext);
  // const [dataItem, setDataItem] = useState(items);
  const cloneItems = items?.map((item, index) => (
    <SwiperSlide key={index}>
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
        slidesPerView={slidesPerView}
        // navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className={"m-auto "}
        pagination={{ clickable: true }}
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