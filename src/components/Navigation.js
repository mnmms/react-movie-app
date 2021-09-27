import React from  'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
     return (
          // <div className="container">
               <div className="navi">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
               </div>
          // </div>
     )
}

export default Navigation;