import React from 'react';
import { useHistory } from 'react-router-dom';
import { localRoute } from "../../routes/localRoutes";

export default function Footer() {
    const history = useHistory();

    const handleBackHome = () => {
        history.push(localRoute.home)
    };
    const handleBackServices = () => {
        // history.push(localRoute.services)
        window.location.replace("/#services");
    };


    const handleBackWhyUs = () => {
        window.location.replace("/#why-us");
    };


    const handleBackContact = () => {
        history.push(localRoute.contact)
    };

    return (
        <>

            <footer class="theme-footer-two pt-50 md-pt-40" style={{ background: '#2E89FA', color: '#fff' }}>
                <div class="top-footer mt-20 pb-10">
                    <div class="container">
                        <div class="row justify-content-between">
                            <div class="font-montserrat fw-500 col-lg-3 col-md-3 col-sm-6 footer-list" >
                                <h5 class="footer-title font-montserrat fw-600" style={{ color: '#fff' }}>Company</h5>
                                <ul>
                                    <li><a style={{ cursor: "pointer", color: '#fff' }} onClick={handleBackHome}>Home</a></li>
                                    <li><a style={{ cursor: "pointer", color: '#fff' }} onClick={handleBackServices}>Services</a></li>
                                    <li><a style={{ cursor: "pointer", color: '#fff' }} onClick={handleBackWhyUs}>Why Us?</a></li>
                                    <li><a style={{ cursor: "pointer", color: '#fff' }} onClick={handleBackContact}>Contact</a></li>
                                </ul>
                            </div>
                            <div class="font-montserrat fw-500 col-lg-3 col-md-3 col-sm-6 footer-list">
                                <h5 class="footer-title font-montserrat fw-600" style={{ color: '#fff' }}>Career</h5>
                                <ul>
                                    <li><a target="_blank" href="mailto:hr@werbiz.com" style={{ cursor: "pointer", color: '#fff' }}>hr@werbiz.com</a></li>
                                </ul>
                            </div>

                            <div class="font-montserrat fw-500 col-lg-3 col-md-3 col-sm-6 footer-list">
                                <h5 class="footer-title font-montserrat fw-600" style={{ color: '#fff' }}>Business & Queries</h5>
                                <ul>
                                    <li><a target="_blank" href="mailto:business@werbiz.com" data-rel="external" style={{ cursor: "pointer", color: '#fff' }}>business@werbiz.com</a></li>
                                    <li><a target="_blank" href="tel:+919962759154" data-rel="external" style={{ cursor: "pointer", color: '#fff' }}>+91 9962759154</a></li>
                                </ul>
                            </div>


                            <div class="font-montserrat fw-500 col-lg-3 col-md-3 col-sm-6 address-list">
                                <a style={{ cursor: "pointer", color: '#fff' }} onClick={handleBackHome} class="logo">
                                    <img style={{ width: "8em" }} src="../../../../assets/img/werkbizlogo 2.png" alt="werkbiz-logo" />
                                </a>
                                <ul class="mt-10 info">
                                    <li ><a target="_blank" href="https://goo.gl/maps/rKU4kPQeULfKnt6u9" style={{ color: '#fff', fontWeight: 700 }}>L-148, 5th Main Rd, near Rajesh Jewellers, Sector 6, HSR Layout, Bengaluru, Karnataka 560102</a></li>
                                    <hr style={{ marginTop: "5px", background: '#fff' }} />
                                </ul>
                                <ul class="social-icon d-flex">
                                    {/* <li><a style={{ color: '#fff' }} target="_blank" href=""><i class="fa fa-facebook"></i></a></li> */}
                                    <li><a style={{ color: '#fff' }} target="_blank" href="https://www.linkedin.com/company/werkbiz/"><i class="fa fa-linkedin"></i></a></li>
                                    <li><a style={{ color: '#fff' }} target="_blank" href="https://www.instagram.com/werkbiz/"><i class="fa fa-instagram"></i></a></li>
                                    {/* <li><a style={{ color: '#fff' }} target="_blank" href=""><i class="fa fa-twitter"></i></a></li> */}
                                    {/* <li><a style={{ color: '#fff' }} target="_blank" href=""><i class="fa fa-youtube"></i></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="bottom-footer-content">
                        <div class="d-flex align-items-center justify-content-center" >
                            <p style={{ borderTop: "1.5px solid #fff", color: '#fff' }} class="font-montserrat pt-10 fw-500 ">Copyright © 2022 Werbiz Pvt Ltd. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
