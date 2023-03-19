import React, { useContext } from "react";
import { AppContext } from "./AppContextApi";
import SingleCardStar from "./SingleCardStar";
import SwiperIndvidual from "./SwiperIndvidual";

const OurTeamSection = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <div className='text-center my-5 container'>
        <h2> We have awesome team member </h2>
        <h2>to help support.</h2>
        <SwiperIndvidual items={products} spaceBetween={5} slidesPerView={5}>
          <SingleCardStar name='Fruits' img='/category1.png' />
          <SingleCardStar name='vegetabels' img='/category2.png' />
          <SingleCardStar name='Salad' img='/category3.png' />
          <SingleCardStar name='fresh drinks' img='/category3.png' />
          <SingleCardStar name='fresh drinks' img='/category3.png' />
          <SingleCardStar name='fresh drinks' img='/category3.png' />
          <SingleCardStar name='fresh drinks' img='/category3.png' />
        </SwiperIndvidual>
      </div>
    </>
  );
};

export default OurTeamSection;
