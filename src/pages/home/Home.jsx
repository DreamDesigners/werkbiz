import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./HomeStyle";
import Home from '../../components/home/home/index'
const HomePage = React.memo((props) => {
  return (
    <div>
      <Home />

    </div>
  );
});

export default withRouter(HomePage);
