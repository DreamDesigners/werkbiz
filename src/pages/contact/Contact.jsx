import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./ContactStyle";
import Contact from '../../components/contact/index'
const ContactPage = React.memo((props) => {
  return (
    <>
      <Contact />
    </>
  );
});

export default withRouter(ContactPage);
