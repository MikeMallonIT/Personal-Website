import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>IT Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div key={item.name} className="columns portfolio-item">
                  <div className="item-link">
                    {/* <a href={`#modal-${item.name.toLowerCase().replace(/\s/g, "")}`}> */}
                    <a href={item.ampUrl} target="_blank" rel="noopener noreferrer">
                    {/*<div className="popUp" id={`modal-${item.name.toLowerCase().replace(/\s/g, "")}`}>*/}
                    <div className="popUp">
                      <img src={`${item.imgUrl}`} className="item-img" alt='img' />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
             
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>

                        </div>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
          <h1>Automotive</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-quarters cf">
          {
            resumeData.cars && resumeData.cars.map((item)=>{
              return(
                <div key={item.name} className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={`#modal-${item.name.toLowerCase().replace(/\s/g, "")}`}>
                    <div className="popUp" id={`modal-${item.name.toLowerCase().replace(/\s/g, "")}`}>
                      <img src={`${item.imgUrl}`} className="item-img" alt='img' />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
             
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>

                        </div>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}

