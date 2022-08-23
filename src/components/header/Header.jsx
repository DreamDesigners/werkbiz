import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { localRoute } from "../../routes/localRoutes";

export default function Header(props) {
  const navRef = React.useRef(null);

  const history = useHistory();

  const handleBackHome = () => {
    navRef.current.classList.toggle("show");
    history.push(localRoute.home);
    window.scrollTo(0, 0);
  };

  const handleBackHome1 = () => {
    history.push(localRoute.home);
    window.scrollTo(0, 0);
  };

  const handleBackServices = () => {
    // history.push(localRoute.services);
    // navRef.current.classList.toggle("show");
    window.location.replace("/#services");
  };

  const handleBackWhyUs = () => {
    window.location.replace("/#why-us");
    navRef.current.classList.toggle("show");
  };

  const handleBackContact = () => {
    history.push(localRoute.contact);
    navRef.current.classList.toggle("show");
  };

  const currentRoute = useHistory().location.pathname.toLowerCase();

  const currentID = useHistory().location.hash.toLowerCase();

  console.log('currentID', currentID, useHistory().location.hash.toLowerCase() == '')

  const onToggleClick = (e) => {
    navRef.current.classList.toggle("show");
  };



  return (
    <div class="theme-main-menu sticky-menu theme-menu-three">
      <div class="d-flex align-items-center justify-content-center">
        <div class="logo" style={{ marginLeft: '20px' }}>
          <a
            style={{ cursor: "pointer" }}
            onClick={handleBackHome1}
          >
            <img
              class="werkbiz-logo"
              src="../../../../assets/img/logo1.png"
              alt="werkbiz-logo"
            />
          </a>
        </div>

        <nav id="mega-menu-holder" class="navbar navbar-expand-lg">
          <div class="container nav-container">
            <button
              class="navbar-toggler navbar-toggler-right"
              onClick={onToggleClick}
              type="button"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="flaticon-menu-of-three-lines"></i>
            </button>

            <div class="navbar-collapse collapse" ref={navRef}>
              <div class="font-montserrat d-lg-flex 	">
                <ul class="fw-500 font-montserrat navbar-nav">
                  <li class=" nav-item position-static active" >
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={handleBackHome}
                      class="nav-link"
                    >
                      <span className={currentRoute == "/" && currentID == '' ? "tabactive" : ""} id='nav'>
                        Home
                      </span>
                    </a>
                  </li>

                  <li class="nav-item position-static active">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={handleBackServices}
                      class="nav-link"
                    >
                      <span
                        id='nav'
                        className={
                          currentID.includes('#services') ? "tabactive" : ""
                        }
                      >
                        Services
                      </span>
                    </a>
                  </li>
                  <li class="nav-item position-static active">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={handleBackWhyUs}
                      class="nav-link"
                    >
                      <span
                        id='nav'
                        className={currentID.includes('why-us') ? "tabactive" : ""}
                      >
                        Why Us?
                      </span>
                    </a>
                  </li>

                  <li class="nav-item  position-static active">
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={handleBackContact}
                      class="nav-link"
                    >
                      <span
                        id='nav'
                        className={
                          currentRoute == "/contact-us" ? "tabactive" : ""
                        }
                      >
                        Contact
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
