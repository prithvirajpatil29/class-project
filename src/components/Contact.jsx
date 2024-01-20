import React from 'react'
import Header from './Header';
import Footer from './Footer';
const Contact = () => {
  return (
    <div className="">
        <Header></Header>
    <div className='container my-3'>
            <h1 className='text-center text-success'>Contact</h1>
        <div className="offset-md-3">
            <form action="" className=''>
                <div className="row">
                <div className="col-md-4">
                    <label htmlFor="">First name</label>
                <input type="text" className='form-control' placeholder='First Name'/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="">Last name</label>
                <input type="text" className='form-control' placeholder='Last Name' />
                </div>
                </div>
                <div className="row mt-2">
                <div className="col-md-4">
                    <label htmlFor="">Mobile</label>
                <input type="number" className='form-control' placeholder='9090459030'/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="">Email</label>
                <input type="email" className='form-control' placeholder='Email'/>
                </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-8">
                        <label htmlFor="">Message</label>
                    <textarea name="" className='form-control'  id="" cols="30" rows="4" placeholder='Enter message you want to conveys' ></textarea>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="">
                        <input type="submit" className='btn btn-outline-success  px-5' value="Submit" />
                    </div>
                </div>
            </form>
        </div>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Contact