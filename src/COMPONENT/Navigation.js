import React from 'react';
import './Navigation.css';

 function Navigation() {
  return (
    <div className='Categories-Block'>
     <ul className="Categories">
        <li className='Categories-li'><a className='Categories-a ' href="/"> Home</a></li>
        <li className='Categories-li'><a className='Categories-a ' href="/"> Single News</a></li>
        <li className='Categories-li'><a className='Categories-a ' href="/"> Categories</a></li>
        <li className='Categories-li'><a className='Categories-a ' href="/"> Contact</a></li>
      </ul>
    </div>
  )
}

export default Navigation;