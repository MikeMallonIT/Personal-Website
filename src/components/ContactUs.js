import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <h1 className="lead">
              Let's get in touch!
              </h1>
            </div>
          </div>
          <div className="row">

          <img src = "/images/replay.svg" alt="Contact us vector"/>

            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                <p className="address">
                  <span className="contactName">{resumeData.name}</span>
                  <br></br>
                  <span><a href = {`mailto: ${resumeData.website}`}>{resumeData.website}</a></span> 
                </p>
                <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li key={item.name} >
                    <a href={item.url}>
                    <i className={item.className} /> <span className="contactName">   {item.name}</span>
                    </a>
                  </li>
                )
              })
            }
          </ul>
                

            
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}