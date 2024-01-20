import React from 'react'
import logor from '../assets/images/islam.png'
import './Back.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div className='bg-navbar'>
    <nav className='navbar navbar-expand-md navbar-dark bg-secondary opacity-75'>
        <div className="container">
               <a to={'/'} href="" className='navbar-brand'>
                <img src={logor} height={'50px'} alt="" />
               </a>
            <button className="navbar-toggler" data-bs-toggle='collapse' data-bs-target='#menu'>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <NavLink to={'/'} href='' className="nav-link text-white">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/contact'}  href="" className="nav-link text-white">Contact</NavLink>
                    </li>
                    <li className='nav-item'>
                    <span className='d-flex justify-content-center align-items-center bg-black rounded text-white' style={{width:'130px'}}> 
                    <i class="bi bi-translate"></i>
                        <select name="" id="" className='nav-link bg-black' >
                            <option value="">English</option>
                            <option value="" >Kannada</option>
                            <option value="">Hindi</option>
                            <option value="">Urdu</option>
                        </select>
                    </span>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Header