import React, { Component } from "react";
class Header extends Component {
  render() {
    
    return (
      <header >
        <nav className="navbar navbar-expand-lg navbar-light bg-light-blue fixed-top navbar-boxed header-reverse-scroll py-0">
          <div className="container-fluid nav-header-container">
            <div className="col-5 col-lg-2 ps-lg-0 me-auto me-lg-0">
              <a className="navbar-brand" href="index.html">
                <img
                  src="images/skin.png"
                  data-at2x="images/skin.png"
                  alt=""
                  className="default-logo"
                />
                <img
                  src="images/skin.png"
                  data-at2x="images/skin.png"
                  alt=""
                  className="alt-logo"
                />
                <img
                  src="images/skin.png"
                  data-at2x="images/skin.png"
                  className="mobile-logo"
                  alt=""
                />
              </a>
            </div>
            <div className="col-auto col-lg-8 md-position-initial md-no-padding ">
              <div
                className="collapse navbar-collapse justify-content-center text-black font-weight-150 padding-20px-top">
               <h6>FACIAL SKINCARE RECOMMENDER</h6>
              </div>
            </div>
            <div className="col-auto col-lg-2 text-end hidden-xs px-lg-0">
              <div className="header-social-icon d-inline-block">
                <a href="http://www.facebook.com/" target="_blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="http://www.twitter.com/" target="_blank">
                  <i className="fab fa-twitter" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
