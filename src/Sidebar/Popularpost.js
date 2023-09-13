import React from 'react';
import './Popularpost.css';
import './Sidebar.css';
import trending from './trending.json'
import Trending from './Trending'

function Popularpost() {
  return (
    <div className="box">
        <h2 className='title'>Trending</h2>
        {
    trending.map((element,index) => {
      return(
      <Trending
      key={index}
      catgroius={element.Catgroius}
        heading={element.Heading}
        date={element.Date}
        img={element.Poster}
      />
      )
    })
  }                         
      </div>
  )
}

export default Popularpost;