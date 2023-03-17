import React from 'react'
import Card from './Card'

const HottestCategories = () => {
  return (
    <>
     <div className='my-5'>
        <div className='h2 mb-2 text-center'>
          Browse Our <span className='text-success'>Hottest</span> Categories
        </div>
        <div className='container text-center'>
          <div className='row row-cols-1 row-cols-md-2 row-cols-lg-6   '>
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default HottestCategories