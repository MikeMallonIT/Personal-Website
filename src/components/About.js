import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">
            <div className="three columns">
               <img className="profile-pic"  src="images/newHeadshot.jpg" alt="studMuffin" />
            </div>
            <div id="yCenter" className="nine columns main-col">
               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutMe
               }
               </p>
               <br></br>
               <p>
                {
                  resumeData.aboutMeLineTwo
                }
               </p>
               <br></br>
               <p>
                {
                  resumeData.aboutMeLineThree
                }
               </p>
            </div>
         </div>
      </section>
    );
  }
}