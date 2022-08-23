import React from 'react'

export default function NewsLetter() {

    return (
        <>
            <div class="fancy-short-banner-three mt-100 md-mt-80">
                <div class="container">
                    <img class="shapes-newsletter" src="assets/home/newsletter.png" alt="" />
                    <div class="bg-wrapper" style={{ background: '#000F22', color: '#fff' }}>
                        <div class="col-lg-8" style={{ margin: 'auto' }}>
                            <div class="row align-items-center">
                                <div class="form-wrapper" style={{ textAlign: 'center', padding: '10px', marginBottom: '30px' }}>
                                    <h2 class="font-montserrat" style={{ color: '#fff', fontSize: '40px' }}>
                                        We are here to help you grow your business
                                    </h2>
                                </div>
                            </div>
                            <div class="form-wrapper fw-700" style={{ padding: '0px' }}>
                                <form action="#">
                                    <input class="font-montserrat fw-700" type="text" placeholder="Email address" />
                                    <button class="font-montserrat fw-700">Start trial</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



