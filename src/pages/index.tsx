import { Inter } from "next/font/google";
import { motion } from "framer-motion";
// import styles from '@/styles/Home.module.css'
import Navbar from "@/compnents/Navbar";
import { useContext, useEffect } from "react";
import { AppContext } from "@/compnents/AppContextApi";
import Link from "next/link";
import Card from "@/compnents/Card";
import CardStars from "@/compnents/CardStars";
import OfferCard from "@/compnents/OfferCard";
import DaynamicTabs from "@/compnents/DaynamicTabs";
import SwiperCarosal from "@/compnents/SwiperCarosal";
import SingleCard from "@/compnents/SingleCard";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SingleCardStar from "@/compnents/SingleCardStar";
import TringleCard from "@/compnents/TringleCard";
import SwiperIndvidual from "@/compnents/SwiperIndvidual";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
// const products = [
//   {name:'Fruits',img:'/category1.png',},
//   {name:'Vegetables',img:'/category2.png',},
//   {name:'Fresh Nuts',img:'/category3.png',},
//   {name:'Cleaning',img:'/category4.png',},
//   {name:'Spice',img:'/category5.png',},
//   {name:'Juice & Drinks',img:'/category6.png',},

// ]
type products = {
  name: string;
  img: string;
}[];
export default function Home() {
  const { products } = useContext(AppContext);

  return (
    <>
      <div className=' container mt-5'>
        <motion.div
          className='container'
          variants={item}
          initial='hidden'
          animate='visible'
        >
          <div className='mb-2 h2'>
            {" "}
            What We <span className='text-green'> Offer</span> For You
          </div>
        </motion.div>
        <h5 className='text-muted'>
          {" "}
          We Connect buyers and Sellers of Naturals Organic Environmentally
          sound products. <br /> We find the best and makers natural and
          organic.
        </h5>

        {/* Offers */}
        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 my-3 g-3 '>
          <OfferCard />
          <OfferCard
            offer='Get 15% Organic Vegetable'
            offerDetails='Shop our selection of organic fresh vegetables in a discounted price. 10% off'
            offerImage='/banner2.png'
          />
          <OfferCard
            offer='Get 10% off on Special Item'
            offerDetails='Shop our selection of organic fresh vegetables in a discounted price. 10% off'
            offerImage='/banner3.png'
          />
        </div>
        {/* Hottest Categories  */}
        <div className='my-5'>
          <div className='h2 mb-2 text-center'>
            Browse Our <span className='text-success'>Hottest</span> Categories
          </div>
          <div className='container text-center'>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-6   '>
              <Card />
            </div>
          </div>
        </div>
        <DaynamicTabs />
        <div className='text-center container'>
          <h2>
            {" "}
            Most Popular & New{" "}
            <span className='text-success'> Organic Food</span>
          </h2>
          <p className='mx-5 '>
            {" "}
            The demand for organic food is growing at a remarkable rate.
            Consumers have made it want organic produce and every sector of the
            food.
          </p>
        </div>
        <div className='row row-cols-1  row-cols-md-2 my-3 g-3 text-center w-100'>
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
            <SwiperCarosal items={products} grid={{ rows: 2 }}>
              <TringleCard
                name='Fruits'
                img='/category1.png'
                className='half'
              />

              <TringleCard
                name='Fruits'
                img='/category5.png'
                className='half'
              />
              <TringleCard
                name='Fruits'
                img='/category1.png'
                className='half'
              />
              <TringleCard
                name='Fruits'
                img='/category1.png'
                className='half'
              />
              <TringleCard
                name='Fruits'
                img='/category1.png'
                className='half'
              />
              <TringleCard
                name='Fruits'
                img='/category1.png'
                className='half'
              />
              <TringleCard
                name='Fruits'
                img='/category1.png'
                className='half'
              />
              <TringleCard
                name='Fruits'
                img='/category1.png'
                className='half'
              />
            </SwiperCarosal>
            <div className='d-none d-md-block'>
              <h3 className='text-start mb-3  '> New Latest Product</h3>
              <SwiperIndvidual items={products}>
                <SingleCardStar name='Fruits' img='/category1.png' />
                <SingleCardStar name='Fruits' img='/category2.png' />
                <SingleCardStar name='Fruits' img='/category3.png' />
                <SingleCardStar name='Fruits' img='/category3.png' />
              </SwiperIndvidual>
            </div>
          </div>
        </div>
      </div>
      <div className='w-100 bg-black  text-white  '>
        <div className='container row row-cols-1 m-auto row-cols-md-2 row-cols-lg-4 align-items-center py-5'>
          <div className='col d-flex'>
            <div className='m-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='70'
                fill='currentColor'
                className='bi bi-person-hearts text-green'
                viewBox='0 0 16 16'
              >
                <path
                  fillRule='evenodd'
                  d='M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z'
                />
              </svg>
            </div>
            <div className='m-2'>
              <div className='h2'>1,542 +</div>
              <div className='h6'>Satisfied Clients</div>
            </div>
          </div>
          <div className='col d-flex'>
            <div className='m-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='70'
                fill='currentColor'
                className='bi bi-people-fill text-green'
                viewBox='0 0 16 16'
              >
                <path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z' />
              </svg>
            </div>
            <div className='m-2'>
              <div className='h2'>182 +</div>
              <div className='h6'>Expert Team</div>
            </div>
          </div>
          <div className='col d-flex'>
            <div className='m-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='70'
                fill='currentColor'
                className='bi bi-inboxes-fill text-green'
                viewBox='0 0 16 16'
              >
                <path d='M4.98 1a.5.5 0 0 0-.39.188L1.54 5H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0A.5.5 0 0 1 10 5h4.46l-3.05-3.812A.5.5 0 0 0 11.02 1H4.98zM3.81.563A1.5 1.5 0 0 1 4.98 0h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 10H1.883A1.5 1.5 0 0 1 .394 8.686l-.39-3.124a.5.5 0 0 1 .106-.374L3.81.563zM.125 11.17A.5.5 0 0 1 .5 11H6a.5.5 0 0 1 .5.5 1.5 1.5 0 0 0 3 0 .5.5 0 0 1 .5-.5h5.5a.5.5 0 0 1 .496.562l-.39 3.124A1.5 1.5 0 0 1 14.117 16H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .121-.393z' />
              </svg>
            </div>
            <div className='m-2'>
              <div className='h2'>285 +</div>
              <div className='h6'>Activate Products</div>
            </div>
          </div>
          <div className='col d-flex'>
            <div className='m-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='70'
                height='70'
                fill='currentColor'
                className='bi bi-award text-green'
                viewBox='0 0 16 16'
              >
                <path d='M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z' />
                <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z' />
              </svg>
            </div>
            <div className='m-2'>
              <div className='h2'>27 +</div>
              <div className='h6'>Awards Winning</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center my-5 pb-5 container'>
        <h2> Discounts of the Weekly Products</h2>
        <p>
          {" "}
          The demand for organic food is growing at a remarkable rate. Consumers
          have made it.
        </p>
        <SwiperIndvidual items={products} spaceBetween={50} slidesPerView={4}>
          <SingleCardStar name='Fruits' img='/category1.png' />
          <SingleCardStar name='Fruits' img='/category2.png' />
          <SingleCardStar name='Fruits' img='/category3.png' />
          <SingleCardStar name='Fruits' img='/category3.png' />
        </SwiperIndvidual>
      </div>
      <div className='text-center my-5 container'>
        <h2> We have awesome team member </h2>
        <h2>to help support.</h2>
        <SwiperIndvidual items={products} spaceBetween={50} slidesPerView={4}>
          <SingleCardStar name='Fruits' img='/category1.png' />
          <SingleCardStar name='Fruits' img='/category2.png' />
          <SingleCardStar name='Fruits' img='/category3.png' />
          <SingleCardStar name='Fruits' img='/category3.png' />
        </SwiperIndvidual>
      </div>
      <div className='text-center my-5'>.</div>
    </>
  );
}
