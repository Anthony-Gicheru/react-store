import React from 'react'
// import logo from ''
// import { HomeIcon } from '@heroicons/react/24/solid'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'



function Navbar() {
  return (
    <div className='flex justify-between p-6 box- bg-green-200'>
      <div className="nav-logo">
        <img src="{}" alt="" />
      </div>
      <p className='text-3xl font-bold'>Luxe Finds</p>
      <ul className="nav-menu flex gap-4 ">
        <li onClick={() => { setMenu(shop) }} className='fon'>Shop</li>
        <li onClick={() => { setMenu(men) }}>Men</li>
        <li onClick={() => { setMenu(women) }}>Women</li>
        <li onClick={() => { setMenu(kids) }}>Kids</li>
      </ul>
      <div className=' nav-login-cart flex align-middle gap-4 '>
        <button>Login</button>
        <ShoppingCartIcon className='size-6' />
      </div>



    </div>
  )
}

export default Navbar


