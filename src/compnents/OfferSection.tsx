import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import OfferCard from "./OfferCard";

import { useContext } from "react";
import { AppContext } from "./AppContextApi";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.3,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

const OfferSection = () => {
  const [item, setitem] = useState({
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  });
  const [container, setcontainer] = useState({});
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });
  const { products } = useContext(AppContext);
  useEffect(() => {
    setitem(item);
    setcontainer(container);
  }, []);

  return (
    <>
      <div className=' container mt-5 '>
        <motion.ul
          className='container'
          variants={container}
          initial='hidden'
          animate='visible'
        >
          <motion.li className='item' variants={item}>
            <div className='mb-2 h2'>
              {" "}
              What We <span className='text-green'> Offer</span> For You
            </div>

            <h5 className='text-muted'>
              {" "}
              We Connect buyers and Sellers of Naturals Organic Environmentally
              sound products. <br /> We find the best and makers natural and
              organic.
            </h5>
          </motion.li>
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
        </motion.ul>
      </div>
    </>
  );
};

export default OfferSection;
