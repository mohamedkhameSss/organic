import React, { useContext, useEffect } from "react";
import { AppContext } from "./AppContextApi";
import SingleCardStar from "./SingleCardStar";

const CardStars = ({ numberOfCards = 6 }) => {
  const { products } = useContext(AppContext);
  return (
    <>
      {products?.slice(0, numberOfCards)?.map((product, index) => (
        <SingleCardStar
          name={product.name}
          img={product.img}
          key={index * numberOfCards}
        />
      ))}
    </>
  );
};

export default CardStars;
