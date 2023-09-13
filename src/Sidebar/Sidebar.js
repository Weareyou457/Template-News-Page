import React from 'react';
import './Sidebar.css';

function Sidebar() { 
    return (  
            <div className='sidebar'>
                <div className="box">
                    <h2 className='title'>Categories</h2>
                    <div className="sponsors">
                        <div className='displayinline'>
                        <div className="categories-item"><a className='categories-item-a' href="/">राजनीति</a></div>
                        <div className="categories-item"><a className='categories-item-a' href="/">खेल</a></div>
                        </div>
                        <div className='displayinline'>
                        <div className="categories-item"><a className='categories-item-a' href="/">मनोरंजन</a></div>
                        <div className="categories-item"><a className='categories-item-a' href="/">धर्म</a></div>
                        </div>
                        <div className='displayinline'>
                        <div className="categories-item"><a className='categories-item-a' href="/">नेशनल न्यूज़</a></div>
                        <div className="categories-item"><a className='categories-item-a' href="/">मध्य प्रदेश</a></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Sidebar;
