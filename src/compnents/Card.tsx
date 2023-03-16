import React, { ReactNode, useContext } from "react";
import { AppContext } from "./AppContextApi";
import SingleCard from "./SingleCard";
type Props = {
  children: ReactNode;
};
const Card = () => {
  const { products } = useContext(AppContext);
  return (
    <>
      {products?.map((product, index) => (
        <SingleCard name={product.name} img={product.img} key={index + 234} />
      ))}
    </>
  );
};

export default Card;
