import React from 'react'
import Header from './Header';
import Footer from './Footer';
import img1 from '../assets/images/bg-img1.jpg'
import img2 from '../assets/images/bg-img2.jpg'
import img3 from '../assets/images/bg-img3.jpg'
import img4 from '../assets/images/bg-img4.jpg'
import img5 from '../assets/images/bg-img5.jpg'
import img6 from '../assets/images/bg-img1.jpg'
import './Back.css'
const About = () => {
  return (<div className="">
    <Header></Header>
    <div className='container my-4'>
        <h1 className='text-center'>About Us</h1>
        <div className="row mt-2">
            <div className="col-sm-12 colmd-12 col-lg-6 col-xl-6 col-xxl6">
                <img src={img1} alt="" className='img-fluid rounded' />
            </div>
            <div className="col-sm-12 colmd-12 col-lg-6 col-xl-6 col-xxl6">
                <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente expedita, cum amet voluptate eos assumenda autem iusto hic? Alias fugiat explicabo vitae consequuntur unde et quam perspiciatis dolorem aliquam natus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet magnam quibusdam doloribus cum. Illo illum ullam temporibus, veritatis a numquam tempora dolores doloremque consequatur sequi tempore sunt quaerat eligendi laborum!</p>
            </div>
        </div>
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
        <Footer></Footer>
    </div>
  )
}

export default About