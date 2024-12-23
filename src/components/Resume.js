import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.resume && resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div key={item.UniversityName} className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          <br></br>{item.Minor}
                          </p>
                       </div>
                      </div>
                      )
                })
              }
              <div className="pdf">
                <a target="blank" href={`${resumeData.resume}`}>Resume PDF ⏎</a>
              </div>
            </div>
                      
         </div>
        
        
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div key={item.CompanyName} className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.newSpecialization}
                          <span>&bull;</span> <em className="date">{item.newMonthOfLeaving} {item.newYearOfLeaving}</em></p>
                                                    <p>
                          {item.newAchievements}
                          </p>

                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p className="firstAchievements">
                            {item.Role1}{item.Achievements}
                          </p>
                          <p className="firstAchievementsPO">
                            {item.Role2}{item.Achievements1}
                          </p>

                          <p className="info">
                          {item.otherSpecialization}
                          <span>&bull;</span> <em className="date">{item.otherMonthOfLeaving} {item.otherYearOfLeaving}</em></p>
                          <p>
                          {item.otherAchievements}
                          </p>

                          <p className="info">
                          {item.otherSpecialization1}
                          <span>&bull;</span> <em className="date">{item.otherMonthOfLeaving1} {item.otherYearOfLeaving1}</em></p>
                          <p>
                          {item.otherAchievements1}
                          </p>



                       </div>
                    </div>

                  )
                })
              }
            </div> 
         </div>
        
         <div className="row work">
            <div className="three columns header-col">
               <h1><span>Certifications</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.certs.map((item) => {
                  return(
                    <div key={item.CompanyName} className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>

                    </div>
                  )
                })
              }
            </div> 
         </div>


         <div className="row skill">
            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

          <div className="nine columns main-col">
   				<div className="bars">
   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li id="theBar" key={item.skillname}>
                      <em>{item.skillname}</em>
                      <span className={`bar-expand ${item.skillname.toLowerCase().replace(/\s/g, "")}`}>
                      </span>
                      </li>
                    )
                  })
                }

   					</ul>
   				</div>
   			  </div>

        </div>


      </section>
    );
  }
}