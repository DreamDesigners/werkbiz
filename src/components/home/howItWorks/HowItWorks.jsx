import React from 'react'
import { useHistory } from "react-router-dom";
import { localRoute } from 'routes/localRoutes';
import DoneIcon from '@mui/icons-material/Done';

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
            {/* <div data-aos="zoom-in-up" style={{ textAlign: "center" }} class="container font-montserrat">
                <div class="feature-text-block content-r-spacing">
                </div>
            </div> */}

            <div style={{ background: "#EAF3FF", margin: '0px' }} class="font-montserrat pt-40 pb-90">
                <div class="font-montserrat block-style-sixteen"  >
                    <div class="container">
                        <img src="assets/home/how-works.png" alt="" data-aos="zoom-in-up" class="shapes screen-three how-it-works" />
                        <div class="container">
                            <div class="row">
                                <div class="col-xl-7 col-lg-6" data-aos="fade-right" data-aos-duration="500">
                                    <div class="flexbox1">
                                        <div class="text-center">
                                            <h1 class="fs-50 mt-10 fw-700 font-montserrat">How does it works?</h1>
                                        </div>
                                    </div>
                                    <br />
                                    <p style={{ fontSize: "20px", fontWeight: "600", padding: '10px 0px', background: '#fff', margin: '15px 0px', padding: '7px', borderRadius: '5px' }}><span style={{ background: '#377DFF', color: '#fff', padding: '5px 6px', borderRadius: '5px' }}><DoneIcon style={{ fontSize: '30px' }} /></span> &nbsp;Connect with the team</p>
                                    <p style={{ fontSize: "20px", fontWeight: "600", padding: '10px 0px', background: '#fff', margin: '10px 0px', padding: '7px', borderRadius: '5px' }}><span style={{ background: '#377DFF', color: '#fff', padding: '5px 6px', borderRadius: '5px' }}><DoneIcon style={{ fontSize: '30px' }} /></span> &nbsp;We’ll Talk</p>
                                    <p style={{ fontSize: "20px", fontWeight: "600", padding: '10px 0px', background: '#fff', margin: '10px 0px', padding: '7px', borderRadius: '5px' }}><span style={{ background: '#377DFF', color: '#fff', padding: '5px 6px', borderRadius: '5px' }}><DoneIcon style={{ fontSize: '30px' }} /></span> &nbsp;Lets get the ball rolling</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

