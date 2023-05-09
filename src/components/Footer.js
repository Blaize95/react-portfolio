import React from 'react';
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css"

function Footer() {
  return (
      <div className="footer">
        <div className="socialMedia">
          <a href="https://github.com/Blaize95">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/blaize-underwood-8142a818b/">
            <LinkedInIcon />
          </a>
        </div>   
      </div>
  );
}

export default Footer;
