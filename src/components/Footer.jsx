import React from 'react'
import './Back.css'
const Footer = () => {
  return (
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <h5>About Us</h5>
                    <p>Your about content goes here.</p>
                </div>
                <div class="col-md-6">
                    <h5>Contact Us</h5>
                    <span>
                    <i class="bi bi-geo-alt-fill"></i>Karnataka
                    </span>
                    <span className='mx-2'><i class="bi bi-telephone-fill"></i> +917234567890</span>
                    <span><i class="bi bi-envelope"></i> @gmail.com</span>
                </div>
            </div>
            <div className="row">
            <div class="text-center">
                    <p>&copy; 2023 Your Company Name All rights reserved.</p>
                    {/* <p>All rights reserved.</p> */}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer