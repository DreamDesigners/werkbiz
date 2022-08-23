import { useEffect } from 'react'
import React from 'react'
import OurPartners from '../ourPartners/index'
import Counter from '../counter/index'
import OurServices from '../ourServices/index'
import Testimonial from '../testimonial/index'
import Werkbiz from '../werkbiz/index'
import HowItWorks from '../howItWorks/index'
import ClientStory from '../clientStory/ClientStory'

import { Helmet } from 'react-helmet'
import Newsletter from '../newsletter'

export default function Home() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Werkbiz - The Finest Bizness Company
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://werkbiz.com/" />
      </Helmet>
      <br />
      <br />
      <Werkbiz />
      <br />
      <OurPartners />

      <Testimonial />
      <HowItWorks />
      <OurServices />


      <ClientStory />
      <Counter />
      <Newsletter />
    </div>
  )
}

