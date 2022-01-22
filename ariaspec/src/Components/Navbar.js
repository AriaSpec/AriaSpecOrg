import React from 'react';
import { Link } from 'react-router-dom';
export const Navbar = () => {
  return <div>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="about">about</Link>
            {/* <a href='about'>about</a> */}
          </li>
      </ul>
  </div>;
};
