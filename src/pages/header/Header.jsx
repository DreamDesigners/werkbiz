import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./HeaderStyle";
import Header from '../../components/header/index';
// import FloatingWhatsApp from 'react-floating-whatsapp'

const HeaderPage = React.memo((props) => {
  return (
    <>
      {/* <FloatingWhatsApp
        phoneNumber="+917868089917"
        accountName="Taskmo"
        allowClickAway
        notification
        notificationDelay={30000} // 1 minute
        notificationSound={false}
        height={320}
      /> */}
      <Header />
    </>
  );
});

export default withRouter(HeaderPage);
