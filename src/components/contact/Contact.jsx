import React from 'react'
import { useEffect, useState, useContext } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import Find_Taskers_Common from 'components/Find_Taskers_Common';



export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0)
        AOS.init({
            duration: 2000
        });
    }, [])


    return (
        <>
            <div style={{ marginTop: "20px" }}>

                <Helmet>
                    <meta charSet="utf-8" />
                    <title>
                        Werkbiz - The Finest Bizness Company
                    </title>
                    <meta name="description" content="" />
                    <meta name="keywords" content="" />
                    <link rel="canonical" href="https://werkbiz.com/contact-us" />
                </Helmet>



                <div class="font-montserrat container mt-180 mb-50 md-mt-150">
                    <div class="row justify-content-center">
                        <div class="col-xl-10">
                            <div class="row align-items-center justify-content-center">
                                <div data-aos="zoom-in-up" class="col-lg-6 col-md-9">
                                    <div class="consultation-text pr-xl-5">
                                        <div class="section-heading heading-white">
                                            <h2 class="font-montserrat fs-50 fw-600">Get in touch</h2>
                                        </div>

                                        <div class="counter-items row">
                                            <img src='assets/home/contact.png' alt="Contact" />
                                        </div>
                                    </div>
                                </div>
                                <div data-aos="zoom-in-up" class="col-lg-6 col-md-8 wow fadeInUp">
                                    <div class="consultation-form-area pl-xl-3 content-mt-md-50">
                                        <Find_Taskers_Common subscriber_type="Contact" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h2 style={{ padding: '20px 0 5px', color: '#272D4E' }} class="font-montserrat title fs-50 fw-600">Supported by real people</h2>
                    <p style={{ fontSize: "20px", padding: '0px', color: '#94A2B3' }}>Our team  works remotely providing <br />customer support across multiple time zones.</p>
                </div>

                <div class="">
                    <div class="row">
                        <div class="col-sm-10 order-first" style={{ margin: 'auto' }}>
                            <div class="portfolio-thumb ">
                                <img src="assets/contact/team.png" alt="Supported by real people" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
