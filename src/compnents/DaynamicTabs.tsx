import React from "react";
import CardStars from "./CardStars";

const DaynamicTabs = ({
  Cards1 = <CardStars />,
  Cards2 = <CardStars numberOfCards={5} />,
  Cards3 = <CardStars numberOfCards={4} />,
  Cards4 = <CardStars numberOfCards={2} />,
}) => {
  return (
    <div className='my-5 text-center container'>
      <div>
        <h2>
          {" "}
          Most Popular &amp; New <span className='text-success'>
            {" "}
            Organic
          </span>{" "}
          Food
        </h2>
        <h6>
          {" "}
          We Connect buyers &amp; Sellers of Natural, Organic, Enviornmetnlly
          sound products.
        </h6>
        <ul
          className='nav nav-pills  mb-3 w-100 d-flex justify-content-center '
          id='pills-tab'
          role='tablist'
        >
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link  active bg-transparent  borderx text-dark underline-x'
              id='pills-home-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-home'
              type='button'
              role='tab'
              aria-controls='pills-home'
              aria-selected='true'
            >
              Home
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link bg-transparent text-dark underline-x'
              id='pills-profile-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-profile'
              type='button'
              role='tab'
              aria-controls='pills-profile'
              aria-selected='false'
            >
              Profile
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link bg-transparent text-dark underline-x'
              id='pills-contact-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-contact'
              type='button'
              role='tab'
              aria-controls='pills-contact'
              aria-selected='false'
            >
              Contact
            </button>
          </li>
          <li className='nav-item' role='presentation'>
            <button
              className='nav-link bg-transparent text-dark underline-x'
              id='pills-disabled-tab'
              data-bs-toggle='pill'
              data-bs-target='#pills-disabled'
              type='button'
              role='tab'
              aria-controls='pills-disabled'
              aria-selected='false'
            >
              Disabled
            </button>
          </li>
        </ul>
        <div className='tab-content' id='pills-tabContent'>
          <div
            className='tab-pane fade show active'
            id='pills-home'
            role='tabpanel'
            aria-labelledby='pills-home-tab'
            tabIndex={0}
          >
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4   '>
              {Cards1}
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-profile'
            role='tabpanel'
            aria-labelledby='pills-profile-tab'
            tabIndex={0}
          >
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3  '>
              {Cards2}
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-contact'
            role='tabpanel'
            aria-labelledby='pills-contact-tab'
            tabIndex={0}
          >
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3  '>
              {Cards3}
            </div>
          </div>
          <div
            className='tab-pane fade'
            id='pills-disabled'
            role='tabpanel'
            aria-labelledby='pills-disabled-tab'
            tabIndex={0}
          >
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3  '>
              {Cards3}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaynamicTabs;
