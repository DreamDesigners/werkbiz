import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  useLocation,
  useHistory
} from "react-router-dom";
import Home from "../pages/home";
import Header from "../pages/header";
import Footer from "../pages/footer";
import Contact from "../pages/contact";

import NotFound from "../pages/notFound";
import NotFound500 from "../pages/notFound500";
import { localRoute } from "./localRoutes";
import AOS from "aos";
import "aos/dist/aos.css";




function RouterComponent(props) {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [])

  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route exact path={localRoute.home} component={Home} />
          <Route path={localRoute.contact} component={Contact} />

          <Route
            path={`${localRoute.notFound}`}
            component={NotFound}
          />
          <Route
            path={`${localRoute.notFound500}`}
            component={NotFound500}
          />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment >
  );
}

export default withRouter(RouterComponent);
