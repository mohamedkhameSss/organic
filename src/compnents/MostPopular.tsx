import React from "react";
import SingleCardStar from "./SingleCardStar";
import SwiperCarosal from "./SwiperCarosal";
import SwiperIndvidual from "./SwiperIndvidual";
import TringleCard from "./TringleCard";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { AppContext } from "./AppContextApi";
const MostPopular = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      <div className='text-center m-auto container'>
        <h2>
          {" "}
          Most Popular & New <span className='text-success'> Organic Food</span>
        </h2>
        <p className='mx-5 '>
          {" "}
          The demand for organic food is growing at a remarkable rate. Consumers
          have made it want organic produce and every sector of the food.
        </p>
      </div>
      <div className='row row-cols-1  m row-cols-md-2 my-3 g-3 text-center w-100'>
        <div className='col  '>
          <Link href={""}>
            <Image
              width='452'
              height='524'
              className='img-fluid rounded'
              src='/video-intro1.jpg'
              alt=''
            />
          </Link>
        </div>
        <div className='col pb-5 noMarginBottom '>
          <h3 className='text-start mb-3'>Best Sellers</h3>
          <SwiperCarosal items={products}>
            <TringleCard name='Fruits' img='/category1.png' className='half' />
            <TringleCard name='Fruits' img='/category5.png' className='half' />
            <TringleCard name='Fruits' img='/category2.png' className='half' />
            <TringleCard name='gang' img='/category3.png' className='half' />
            <TringleCard name='mang' img='/category4.png' className='half' />
            <TringleCard name='sang' img='/category6.png' className='half' />
            <TringleCard name='wang' img='/category2.png' className='half' />
            <TringleCard name='Fruits' img='/category1.png' className='half' />
          </SwiperCarosal>
          <div className=''>
            <h3 className='text-start  '> New Latest Product</h3>
            <SwiperIndvidual items={products}>
              <SingleCardStar name='Fruits' img='/category1.png' />
              <SingleCardStar name='Fruits' img='/category2.png' />
              <SingleCardStar name='Fruits' img='/category3.png' />
              <SingleCardStar name='Fruits' img='/category3.png' />
            </SwiperIndvidual>
          </div>
        </div>
      </div>
    </>
  );
};

export default MostPopular;
