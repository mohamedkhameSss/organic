
import React from 'react'
import BackGround from './BackGround'
import Footer from './Footer'
import MiniNav from './MiniNav'
import Navbar from './Navbar'
import SearchSection from './SearchSection'

type layoutProps = {
    children: React.ReactNode

}
const Layout = (props: layoutProps) => {
  return (
    <>
    <MiniNav/>
    <hr />
    <SearchSection/>
    
    <div className='w-100' ></div>
    <Navbar/>
    <BackGround/>
    {props.children}


    <Footer/>
    </>
  )
}

export default Layout