import { Inter, Mouse_Memoirs } from "next/font/google";
import { motion, useMotionValueEvent } from "framer-motion";
import { useScroll } from "framer-motion";
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
import OfferSection from "@/compnents/OfferSection";
import HottestCategories from "@/compnents/HottestCategories";
import MostPopular from "@/compnents/MostPopular";
import BannerIconSection from "@/compnents/BannerIconSection";
import DiscountedSection from "@/compnents/DiscountedSection";
import OurTeamSection from "@/compnents/OurTeamSection";
import { faMousePointer } from "@fortawesome/free-solid-svg-icons";
type products = {
  name: string;
  img: string;
}[];


export default function Home() {
  return (
    <>
      <OfferSection />
      <HottestCategories />
      <DaynamicTabs />
      <MostPopular />
      <BannerIconSection />
      <DiscountedSection />
      <OurTeamSection />
      <div className='text-center my-5'>.</div>
    </>
  );
}
