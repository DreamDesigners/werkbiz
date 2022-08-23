import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Testimonial() {

    const handlePreview = () => {

    }
    const handleNext = () => {

    }
    const slider = React.useRef(null);

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 3500,
        autoplaySpeed: 4000,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (
        <>
            <div id="why-us" class="fancy-feature-ten mt-100 md-mt-70">
                <div class="bg-wrapper">
                    <div class="container">
                        <div class="title-style-four text-center mb-70 md-mb-50">
                            <div class="row">
                                <div class="col-lg-4 col-md-9 m-auto">
                                    <h2 class="centerAlign font-montserrat fw-700">What makes us <span style={{ color: '#314FA5' }}>Unique?</span></h2>
                                </div>
                                <div class="col-xl-8 col-lg-9 m-auto">
                                    <Slider ref={slider} {...settings}>
                                        <div class="row justify-content-center mt-35 md-mt-20">
                                            <div style={{ textAlign: 'left' }} class="col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration="1200">
                                                <div class="block-style-fifteen mt-40">
                                                    <div class="icon d-flex align-items-center justify-content-center" >
                                                        <img src="../../images/icon/lock.png" style={{ width: '50px' }} alt="" />
                                                    </div>
                                                    <h3 class='font-montserrat' style={{ fontWeight: '700' }}>Value for money</h3>
                                                    <p class='font-montserrat'>With our Prime resources in store, we deliver the best.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row justify-content-center mt-35 md-mt-20">

                                            <div style={{ textAlign: 'left' }} class="col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                                                <div class="block-style-fifteen mt-40">
                                                    <div class="icon d-flex align-items-center justify-content-center">
                                                        <img src="../../images/icon/money.png" style={{ width: '50px' }} alt="" />
                                                    </div>
                                                    <h3 class='font-montserrat' style={{ fontWeight: '700' }}>Transparency</h3>
                                                    <p class='font-montserrat'>A see through process that builds our relationship.</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="row justify-content-center mt-35 md-mt-20">

                                            <div style={{ textAlign: 'left' }} class="col-lg-12 col-md-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                                                <div class="block-style-fifteen mt-40">
                                                    <div class="icon d-flex align-items-center justify-content-center">
                                                        <img src="../../images/icon/support.png" style={{ width: '50px' }} alt="" />
                                                    </div>
                                                    <h3 class='font-montserrat' style={{ fontWeight: '700' }}>24/7 Customer Support</h3>
                                                    <p class='font-montserrat'>Anytime, anyday we are just a click away.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </Slider>

                                    <div style={{ display: 'flex', float: 'right', margin: '30px 15px' }}>
                                        <button style={{ background: '#fff', color: '#2E89FA', padding: '10px 15px', borderRadius: '5px' }} onClick={() => slider?.current?.slickPrev()}>
                                            <ArrowBackIcon />
                                        </button>
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <button style={{ color: '#fff', background: '#2E89FA', padding: '10px 15px', borderRadius: '5px' }} onClick={() => slider?.current?.slickNext()}>
                                            <ArrowForwardIcon />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <img src="images/shape/137.svg" alt="" class="shapes shape-one" /> */}
                </div>
            </div>

        </>
    );
}
