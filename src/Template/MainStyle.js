import React from 'react';
import './MainStyle.css';
import Myimages from '../Images/mainImage.jpg'

function MainStyle() {
    return (
        <div className='Content'>
            <div className='featured'>
                <h2 className='title'>Featured News</h2>
                <div className="Main-image">
                    <img
                        className="img-fluid w-100"
                        src={Myimages}
                        style={{ objectFit: "cover", borderRadius: "0rem",width:"100%"  }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainStyle;
