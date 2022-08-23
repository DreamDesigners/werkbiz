import React,{useEffect} from "react";
import { withRouter } from "react-router-dom";
import { localRoute } from "../../routes/localRoutes";
import { Link } from "react-router-dom";
import "./NotFoundStyle.jsx";

const NotFound = React.memo((props) => {
 
  return (
    <div style={{margin:"200px 30px"}}>
       <center>
       <img src="assets/page not found.svg"/>
     </center>
    </div>
  );
});

export default withRouter(NotFound);
