import React from 'react'
import { useHistory } from "react-router-dom";
import { localRoute } from 'routes/localRoutes';
export default function HowItWorks() {
    const history = useHistory();
    const handleBackContact = () => {
        history.push(localRoute.contact);
        // navRef.current.classList.toggle("show");
    };

    return (
        <div>
            <div data-aos="zoom-in-up" class="container font-montserrat">
                <img src="assets/home/how-it-works.png" alt="how-it-works" />
            </div>
            <div data-aos="zoom-in-up" style={{ textAlign: "center" }} class="container font-montserrat">
                <div class="feature-text-block content-r-spacing">
                </div>
            </div>

            <div style={{ background: "#EAF3FF", margin: '0px' }} class="font-montserrat xs-container pt-70 pb-50" id="product">
                <div class="container">
                    <div class="text-center mb-60 md-mb-30">
                        <div class="row">
                            <div class="col-xl-10 col-xs-11 m-auto">
                                <h2>
                                    <span class="font-montserrat fw-700 fs-50">How It Works</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div class="mt-30 md-mt-50" id="about">
                        <div class="">
                            <div class="container">
                                <div class="row justify-content-center md-pt-20">
                                    <div data-aos="zoom-in-up" data-aos-duration="500" class="col-2 col-md-2">
                                        <div class="mt-40 how-it-works">
                                            <div class="icon d-flex align-items-center justify-content-center mb-10">
                                                <img width="50" src="../../../../images/icon/icon-team.png" class="display-none" alt="Submit Your Requirements" />
                                            </div>
                                            <h3 class="font-montserrat fs-16 fw-600 text-center">Connect with the team</h3>
                                        </div>
                                    </div>

                                    <div data-aos="zoom-in-up" data-aos-duration="500" class="col-2 col-md-2 dotted-line-margin" style={{ borderBottom: '2px dashed #000' }}>
                                    </div>

                                    <div data-aos="zoom-in-up" data-aos-duration="1000" class="col-2 col-md-2">
                                        <div class="mt-40 how-it-works">
                                            <div class="icon d-flex align-items-center justify-content-center mb-10">
                                                <img width="50" src="../../../../images/icon/icon-women.png" class="display-none" alt="Track the Task" />
                                            </div>
                                            <h3 class="font-montserrat fs-16 fw-600 text-center">We’ll Talk</h3>
                                        </div>
                                    </div>

                                    <div data-aos="zoom-in-up" data-aos-duration="1000" class="col-2 col-md-2 dotted-line-margin" style={{ borderBottom: '2px dashed #000' }}>
                                    </div>

                                    <div data-aos="zoom-in-up" data-aos-duration="1500" class="col-2 col-md-2">
                                        <div class="mt-40 how-it-works">
                                            <div class="icon d-flex align-items-center justify-content-center mb-10">
                                                <img width="50" src="../../../../images/icon/icon-home.png" class="display-none" alt="Pay for the Outcome" />
                                            </div>
                                            <h3 class="font-montserrat fs-16 fw-600 text-center">Lets get the ball rolling</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-70 md-mt-50" style={{ textAlign: 'center' }}>
                        <a onClick={handleBackContact} style={{ cursor: "pointer", borderRadius: "10px", background: "#2E89FA", color: '#fff', fontWeight: 700 }} class="m-auto fw-500 fs-18 font-montserrat theme-btn-nine1 home-page-employer-action">
                            Check Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

