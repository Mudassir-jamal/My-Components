import React from "react";
import "../styles/styles.css";

import image1 from "../Assets/banner1.png"
import image2 from "../Assets/banner2.png"
import image3 from "../Assets/banner3.png"
import image4 from "../Assets/banner4.png"




export const Home = () => {
  return (
    <div id="Home">
      <section className="Home_img overflow-hidden d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6">
            <div className="welcome-intro">
                            <h1 className="text-white text-md-left">Marketing <br/> <span className="fw-4">strategy</span></h1>
                            <p className="text-white txt-md-left my-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.</p>
                            {/* <!-- Buttons --> */}
                            <div className="button-group d-flex align-items-center justify-content-center justify-content-md-start">
                                <a href="#" className="btn btn-bordered-white nav_btn_With_text" >Start a Project</a>
                                {/* <!-- Play Button --> */}
                                <a className="play-btn" data-fancybox="" data-width="640" data-height="360" data-small-btn="true" href="https://youtu.be/TKnufs85hXk">
                                    <div className="btn-circle play-animation"></div>
                                    <div className="btn-circle play-animation animation-short"></div>
                                    {/* <!-- Play Icon --> */}
                                    {/* <div className="play-icon">
                                        <svg className="svg-inline--fa fa-play fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path></svg>
                                        
                                    </div> */}
                                </a>
                            </div>
                        </div>
            </div>
            <div className="col-12 col-md-6">
              <span>
                <img src={image1} alt="img"/>
              </span>
              <span>
                <img src={image3} alt="img"/>
              </span>
              <span>
                <img src={image2} alt="img"/>
              </span>

              <span>
                <img src={image4} alt="img"/>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
