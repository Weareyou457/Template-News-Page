import React from 'react';
import './TopbarStart.css';
 function TopbarStart() {
      return (

    <div className="container-fluid">
      <div className="first">
           <img style={{width:'100%',height:'100px'}} src={`http://174.138.101.222:8080/image/logo_small_1691839881329.jpg`} /></div>
    <div className="second">
          <img
            src={`http://174.138.101.222:8080/image/image_1692960033080.jpg`}
            alt=""
            width={"100%"}
            height={"100px"}
          /></div>

        
      </div>
  );
};

export default TopbarStart;

