import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [fix, setfix] = useState(false);
  useEffect(() => {
    function setfixed() {
      scrollY > 250 ? setfix(true) : setfix(false);
    }

    addEventListener("scroll", setfixed);
  }, []);
  const Cateory = [
    { name: "Grecory & Frozen", icon: "�", id: 21211 },
    { name: "Fresh Fruits", icon: "�", id: 23233 },
    { name: "Fresh Fruits", icon: "�", id: 23232327777733 },
    { name: "Fresh Fruits", icon: "�", id: 234234233 },
    { name: "Fresh Fruits", icon: "�", id: 23546456233 },
    { name: "Fresh Fruits", icon: "�", id: 2378756233 },
    { name: "Fresh Fruits", icon: "�", id: 231233 },
  ];

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg w-100 maincolor ${
          fix ? "fixed-top " : ""
        }`}
      >
        <div className='container'>
          <Link
            className='navbar-brand  navbar-toggler border-0 brand-font'
            href='#'
          >
            <div>
              <Image
                src='/logo-mobile.png'
                width={175}
                height={100}
                alt='Picture of the author'
              />
            </div>
          </Link>
          <button
            className='navbar-toggler ms-auto m-1 '
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#navbarOffcanvasLg'
            aria-controls='navbarOffcanvasLg'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div
            className='offcanvas offcanvas-start bg-success ps-3  '
            tabIndex={-1}
            id='navbarOffcanvasLg'
            aria-labelledby='navbarOffcanvasLgLabel'
          >
            <div className='  d-lg-flex align-items-center row '>
              <div className='dropdown d-none d-lg-block col-3'>
                <button className='dropbtn p-3 w-100 '>
                  {" "}
                  <i className='fa-solid fa-bars'></i> Browse Categories
                </button>
                <div className='dropdown-content'>
                  {Cateory.map((item, index) => (
                    <>
                      <a className='px-3' href='#' key={item.id*index}>
                        <span className='p-2'>{item.icon}</span>
                        {item.name}
                      </a>
                      <hr key={index+10} />
                    </>
                  ))}
                </div>
              </div>
              <ul className='navbar-nav col-6  mb-2 mb-lg-0 d-flex justify-content-around   '>
                <li key={3} className='nav-item '>
                  <Link
                    
                    className='nav-link active text-white fw-bold'
                    aria-current='page'
                    href='/'
                  >
                    Home
                  </Link>
                </li>
                <li key={4} className='nav-item'>
                  <Link
                    
                    className='nav-link text-white fw-bold'
                    href='/ourServices'
                  >
                    Services
                  </Link>
                </li>

                <li key={5} className='nav-item'>
                  <Link
                    
                    className='nav-link text-white fw-bold'
                    href='/about'
                  >
                    About
                  </Link>
                </li>
                <li key={6} className='nav-item'>
                  <Link
                    
                    className='nav-link text-white fw-bold'
                    href='/testimonials'
                  >
                    Testimonials
                  </Link>
                </li>
                <li key={7} className='nav-item'>
                  <Link
                    
                    className='nav-link text-white fw-bold'
                    href='/news'
                  >
                    News
                  </Link>
                </li>
              </ul>

              <button className='dropbtn col-3 p-3 px-5 d-none d-lg-block'>
                {/* <i className="fa-solid fa-cart-shopping"></i> */}
                <span className='fw-bold'> Cart</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
