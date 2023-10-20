import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-between'>
        <div>
            <img src="../../public/images/Logo.png" alt="" />
        </div>
        <nav className='flex flex-row text-xl'>
            <a className='me-4' href="#">Home</a>
            <a className='me-4' href="#">Categories</a>
            <a className='me-4' href="#">Makeup </a>
            <a className='me-4' href="#">Blog</a>
            <a className='me-4' href="#">About</a>
            <a className='me-4' href="#">Contact Us</a>
        </nav>
        <div className="flex flex-row">
            <p className='mn'>Search</p>
            <img src="../../public/images/search.png" className='h-6 w-6 ms-2 mt-1' alt="search" />
        </div>
    </div>
  )
}
