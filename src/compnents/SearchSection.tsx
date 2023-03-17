import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SearchSection = () => {
  return (
    <>
    <div className='w-100 container my-2 '>
        <div className='row align-items-center'>
    <Link className="navbar-brand col-2 d-none d-lg-flex" href="#">
      <div>
      <Image
      src="/logo-mobile.png"
      width={175}
      height={100}
      alt="Picture of the author"
    /></div></Link>
    
    <div className='col-8 '>
    <form className="d-none d-lg-flex position-relative " role="search">
        <input className="form-control w-100 border border-2 me-2 px-5 py-3 rounded-pill text-center fira"  type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-success green searchBtn border border-1 py-3 px-5  position-absolute rounded-pill me-2 end-0" type="submit">Search</button>
        <button className="btn btn-success border border-1 text-black py-3 px-5 gray dropdown position-absolute rounded-pill">
          <Link className="nav-link dropdown-toggle " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span>  Select A Category</span>
          </Link>
          <ul className="dropdown-menu ">
            <li><Link className="dropdown-item" href="/about">about</Link></li>
            <li><Link className="dropdown-item" href="#">Another action</Link></li>
            <li><hr className="dropdown-divider" /></li>
            <li><Link className="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </button>
      </form>
      </div>
      <div className='col-2 d-none d-lg-flex'>
        <div className='m-2'> 
      <i className="fa-solid fa-headset fa-2xl"></i>
      </div>
      <div>
        <h6>24/7 Support</h6>
        <Link href={""} className='text-decoration-none'>0103124242</Link>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default SearchSection