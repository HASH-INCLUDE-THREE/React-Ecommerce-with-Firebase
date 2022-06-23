import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
         
        
        <a href="#"><InstagramIcon /></a>
        <a href="#"><TwitterIcon /> </a>
        <a href="#"><FacebookIcon /></a>
        <a href="#"><LinkedInIcon /></a>
        
      </div>
      <p className="copyright"> &copy; {new Date().getFullYear()} Copyright: #include3 </p>
    </div>
  );
}

export default Footer;
