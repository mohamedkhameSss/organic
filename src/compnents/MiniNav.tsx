import Link from 'next/link'
import React from 'react'

const MiniNav = () => {
  return (
    <>
<div className="navbar navbar-expand-md container d-none d-md-flex">
  <div className="container-fluid">
    <div  >Welcome to our Organic</div>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button> */}
    <div className="collapse navbar-collapse " >
      <ul className="navbar-nav ms-auto">
      <div className='d-flex align-items-center'>  <div className="fa-solid fa-language "></div></div>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Langauge
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="/about">English</Link></li>
            <li><Link className="dropdown-item" href="#">French</Link></li>
          </ul>
        </li>
        <li className="nav-item ">
          <a className="nav-link " aria-current="page" ><div className="fa-regular fa-heart text-success"></div><span> My Wishlist</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link">SignIn  </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" >SignUp</a>
        </li>
        <li className="nav-item">
          
        </li>
      </ul>
    </div>
  </div>
  <hr />
</div>

    </>
  )
}

export default MiniNav