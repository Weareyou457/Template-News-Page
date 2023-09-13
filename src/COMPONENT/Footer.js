import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
<>
<div style={{display:"flex"}}>

    <div className="headingpara">
        <a href="/" className='heading' ><h1>News Stack Live</h1></a>
        <p className='para' style={{marginBottom:"20px"}}>News Track is a leading provider of news, information and entertainment across broadcast television, mobile platforms, digital media and Print media serving consumers and advertisers in strong local markets, primarily in the Madhya Pradesh & Chhattisgarh states. The company's operations include India's First ON WHEEL NEWS CHANNEL, News Paper, Event Management, and Marketing and their associated digital and mobile media services.</p>

   
    <div style={{display:"flex"}} >
              <a
                className="iconss"
                style={{ width: 38, height: 38 }}
                 href='#'
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="iconss"
                style={{ width: 38, height: 38 }}
                 href='#'
                target="_blank"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="iconss"
                style={{ width: 38, height: 38 }}
                 href='#'
                target="_blank"
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="iconss"
                style={{ width: 38, height: 38 }}
                 href='#'
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="iconss"
                style={{ width: 38, height: 38 }}
                 href='#'
                target="_blank"
              >
                <i className="fab fa-youtube" />
              </a>
            </div>
            </div>

    <div className="quick">
            <h4 className="quickHeading">Quick Links</h4>
            <div className="ufm">
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                About
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Advertise
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Privacy &amp; policy
              </a>
              <a className="text-secondary mb-2" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Terms &amp; conditions
              </a>
              <a className="text-secondary" href="#">
                <i className="fa fa-angle-right text-dark mr-2" />
                Contact
              </a>
            </div>
            </div>

            </div>

            </>
  )
}

export default Footer
