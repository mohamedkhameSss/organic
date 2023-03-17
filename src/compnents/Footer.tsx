import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <div className='w-100 bg-light  p-5 position-relative mt-5'>
      <div className='container'>
        <div className='bg-success position-absolute top--50 p-4 p-md-5 text-center text-md-start rounded-pill  m-auto  row justify-content-around text-white align-items-center'>
          <div className='col-lg-5 '>
            <h2>SIGN UP FOR NEWSLETTER</h2>
            <p>
              Agriculture is the art and science of cultivating the soil,
              growing crops.
            </p>
          </div>
          <div className=' col-lg-7'>
            <form className=' d-flex position-relative ' role='search'>
              <input
                className='form-control   me-2 px-md-5 py-md-3 rounded-pill text-start fira'
                type='search'
                placeholder='Enter Your Email address....'
                aria-label='Search'
              />
              <button
                className='btn btn-danger  searchBtn  py-md-3 px-md-5  position-absolute rounded-pill me-2 end-0'
                type='submit'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className='row row-cols-1 row-col-sm-1 row-cols-md-3  row-cols-lg-5 my-3 g-3 pt-5 '>
          <div className='col align-items-start '>
            <h3>Information</h3>
            <p>
              {" "}
              The variety of products available at our store at the moment is
              vast, but we still continue to widen our assortment.
            </p>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Our Stories
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                About Us
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Contact Us
              </a>
            </div>
          </div>
          <div className='col'>
            <h3>Information</h3>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Specials
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Wishlist
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Compare
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Our Stories
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                About Us
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Contact Us
              </a>
            </div>
          </div>
          <div className='col'>
            <h3>Information</h3>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Specials
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Wishlist
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Compare
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Our Stories
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                About Us
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Contact Us
              </a>
            </div>
          </div>
          <div className='col'>
            <h3>Information</h3>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Specials
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Wishlist
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Compare
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Our Stories
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                About Us
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Contact Us
              </a>
            </div>
          </div>
          <div className='col'>
            <h3>Information</h3>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Specials
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Wishlist
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Compare
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Our Stories
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                About Us
              </a>
            </div>
            <div>
              <a className='text-decoration-none text-dark' href=''>
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
