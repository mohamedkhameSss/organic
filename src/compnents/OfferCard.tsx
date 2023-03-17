import Image from "next/image";
import React from "react";

const OfferCard = ({
  offer = "Get 10% off on Fruits Item",
  offerDetails = "Shop our selection of organic fresh vegetables in a discounted price. 10% off",
  offerImage = "/banner1.png",
}) => {
  return (
    <div className='col  '>
      <div
        className='p-3 border border-0 rounded shadow '
        style={{ minHeight: 222.8 }}
      >
        <h4>{offer}</h4>
        <div className='d-flex align-items-end '>
          <div>
            <p className='text-muted'>{offerDetails}.</p>
            <button className='btn btn-outline-danger rounded-pill width2 d-flex justify-content-between align-items-center'>
              <span> Shop Now </span>
              {/* <img
                className='d-none arrowDisplay'
                src='/arrow-right-circle.svg'
                alt=''
              /> */}
               <Image
              className='d-none arrowDisplay'
              // fill={true}
              width='30'
              height='30'
              // sizes='(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw'
              src='/arrow-right-circle.svg'
              alt=''
            />
            </button>
          </div>
          <div className='d-flex align-items-end  '>
            {" "}
            {/* <img className='bounce w-100' src={offerImage} alt='' /> */}
            <Image
              className='bounce w-100'
              // fill={true}
              width='80'
              height='119'
              // sizes='(max-width: 768px) 33vw, (max-width: 1200px) 50vw, 33vw'
              src={offerImage}
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
