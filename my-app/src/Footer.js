import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import GoalCollaboration from "./GoalCollaboration";
import Home from "./Home";
import Solution from "./Solution";
import AboutUs from "./AboutUs";
import Relevance from "./Relevance";
import {Switch} from "react-router-dom/cjs/react-router-dom.min";

const Footer = () => {
    return(
      <Switch>
          <div className="Footer">
            <div className="logoFooter">
              <img src="NAMECARD16.png" alt="logoHeader" class="logoFooter"></img>
            </div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            </link>
              <h2>Copyright &#169; 2023 Space Fusion Inc. </h2>
              <a href="https://www.facebook.com/profile.php?id=61553412677922" class="fa fa-facebook"></a>
              <a href="https://www.instagram.com/spacefusionorg/?fbclid=IwAR2aBDrH67Lm_5ZYhWxD2z5piN5uu72DqJaHFChBHgd07mBvBnCQQNdjaDU" class="fa fa-instagram"></a>
              <a href="https://www.youtube.com/@SpaceFusionInc-spacefusionorg/featured" class="fa fa-youtube"></a>
              <a href="https://twitter.com/SpaceFusionInc" class="fa fa-twitter"></a>
        </div>  
        </Switch>
  );
}

export default Footer;