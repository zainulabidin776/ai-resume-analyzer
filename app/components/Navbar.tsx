import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <nav className='navbar animate-in slide-in-from-top duration-1000'>
        <Link to='/' className="group">
            <p className='text-2xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300'>RESUMIND</p>
        </Link>
        <Link to='/upload' className='primary-button w-fit hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300'>
           <span className="relative z-10">Upload Resume</span>
        </Link>
    </nav>
  )
}

export default Navbar