import React, { useState, useEffect } from "react";
import "./FooterStyle";
import Footer from '../../components/footer/index'
import Fab from '@mui/material/Fab';
import MessageIcon from '@mui/icons-material/Message';

import {
  withRouter,
  useHistory
} from "react-router-dom";

const FooterPage = React.memo((props) => {
  const history = useHistory()
  let pageTitlePath = history.location && history.location.pathname.split('/')
  console.log("pageTitlePath", pageTitlePath)

  return (
    <>

      <Footer />
    </>
  );
});

export default withRouter(FooterPage);
