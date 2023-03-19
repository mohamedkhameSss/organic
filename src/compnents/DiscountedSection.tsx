import React, { useContext } from "react";
import { AppContext } from "./AppContextApi";
import SingleCardStar from "./SingleCardStar";
import SwiperIndvidual from "./SwiperIndvidual";

const DiscountedSection = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <div className='text-center my-5 pb-5 container'>
        <h2> Discounts of the Weekly Products</h2>
        <p>
          {" "}
          The demand for organic food is growing at a remarkable rate. Consumers
          have made it.
        </p>
        <SwiperIndvidual items={products} spaceBetween={10} slidesPerView={4}>
          <SingleCardStar name='Fruits' img='/category1.png' />
          <SingleCardStar name='Fruits' img='/category1.png' />
          <SingleCardStar name='Fruits' img='/category1.png' />
          <SingleCardStar name='Fruits' img='/category1.png' />
          <SingleCardStar name='milk' img='/category2.png' />
          <SingleCardStar name='rice' img='/category3.png' />
          <SingleCardStar name='Fruits' img='/category3.png' />
        </SwiperIndvidual>
      </div>
    </>
  );
};

export default DiscountedSection;
