import React from 'react';
import { Link } from 'react-router-dom';
import AriaSpec from '../Assets/AriaSpec.png'
export const Navbar = () => {
  return <nav className='flex text-xl'>
      <ul className='nav'>
          <div className='w-40 float-left p-0.5'>
            <Link className='block' to="/"><img src={AriaSpec}/></Link>
          </div>
          <li className="float-left p-1 m-3 px-4 mx-1">
            <Link className='block' to="/">Home</Link>
          </li>
          <li className="float-left p-1 m-3 px-4 mx-1 ">
            <Link className='block' to="about">About</Link>
          </li>
          <li className="float-left p-1 m-3 px-4 mx-1 ">
            <Link className='block' to="contact">Contact Us</Link>
          </li>
      </ul>
  </nav>;
};
