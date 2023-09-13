import React from 'react';
import './Sidebar.css';
import Myimage from '../Images/AdIMG.jpg';

function FeaturedVideo() {
  return (
      <div className="box">
        <h2 className='title'>Advertiment</h2>
        <div className="video"> <img src={Myimage} alt="" style={{width:"100%"}}/> </div>
      </div>
    
  )
}

export default FeaturedVideo;