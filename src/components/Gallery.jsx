import React from 'react'
import img1 from '../assets/images/bg-img1.jpg'
import img2 from '../assets/images/bg-img2.jpg'
import img3 from '../assets/images/bg-img3.jpg'
import img4 from '../assets/images/bg-img4.jpg'
import img5 from '../assets/images/bg-img5.jpg'
import img6 from '../assets/images/bg-img1.jpg'
import './Back.css'
const Gallery = () => {
  return (
    <div className='container'>
        <h1 className='text-center'>Gallery</h1>
        <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl4">
                <img src={img1} alt="" className='img-fluid rounded' />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl4">
            <img src={img2} alt="" className='img-fluid rounded' />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl4">
            <img src={img3} alt="" className='img-fluid rounded' />
            </div>
        </div>
        <div className="row my-3">
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl4">
            <img src={img4} alt="" className='img-fluid rounded' />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl4">
            <img src={img5} alt="" className='img-fluid rounded' />
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl4">
            <img src={img5} alt="" className='img-fluid rounded' />
            </div>
           
        </div>
    </div>
  )
}

export default Gallery