import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Let's get in touch!
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
                <h4>
                <p className="address">
                  <span>{resumeData.name}</span>
                  <br></br>
                  <span>{resumeData.website}</span> 
                  <br></br>
                  <span>
                  {resumeData.address}
                  </span>
                  <br></br>
                  <a target="blank" href={`${resumeData.resume}`}>Resume</a>
                </p>
                

            
                </h4>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}