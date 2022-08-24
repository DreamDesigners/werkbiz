import React from 'react'
import { useHistory } from "react-router-dom";
import { localRoute } from 'routes/localRoutes';

export default function Werkbiz() {

    const history = useHistory();

    const handleBackContact = () => {
        history.push(localRoute.contact);
    };
    return (
        <>
            <div style={{ padding: "90px 0px 80px" }} class="app-video font-montserrat ">
                <div class="container">
                    {/* <div > */}
                    <div style={{ padding: "0px 0px 0px" }} class="row">
                        <div data-aos="zoom-in-up" class="col-lg-6 order-lg-first mb-100">
                            <div class="cl-white text-wrapper">
                                <h1 class="font-montserrat fw-700 cl-white mt-120 fs-50 md-mt-30" style={{ lineHeight: "1em", padding: "0px 0px 0px" }}>The Finest Bizness Company</h1>
                                <p class="fw-500 mt-30" style={{ fontSize: "28px" }}>
                                    Our technology is your platform, for every business requirement.
                                </p>
                                <br />
                                <a onClick={handleBackContact} id='btnStarted' style={{ cursor: "pointer", borderRadius: "10px", fontWeight: 700 }} class="m-auto fw-500 fs-18 font-montserrat theme-btn-nine home-page-employer-action">
                                    Get Started
                                </a>
                                <br />
                            </div>
                        </div>
                        <div style={{ margin: "50px auto 0px" }} class="col-lg-6 col-md-8 ml-auto order-lg-last" >
                            <img data-aos="zoom-in-up" src='assets/home/hero-banner.png' alt="India’s Best Job Search App Video" />
                        </div>
                    </div>
                    {/* </div> */}
                </div>
            </div>
        </>
    )
}