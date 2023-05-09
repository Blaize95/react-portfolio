import React from 'react';
import PortfolioItem from '../components/Project';
import "../styles/Portfolio.css";
import Proj1 from "../assets/Proj1.JPG";
import Proj2 from "../assets/Proj2.JPG";
import Proj3 from "../assets/Proj3.JPG";
import Proj4 from "../assets/Proj4.JPG";
import Proj5 from "../assets/Proj5.JPG";
import Proj6 from "../assets/Proj6.JPG";


function Portfolio() {
  return <div className="portfolio">
    <h1> My Projects </h1>
    <div className="portfolioList">
      <a href="https://github.com/Rippi9/Wellness-ap">
        <PortfolioItem name="Wellness App" image={Proj1}/>
      </a>
      <a href="https://unifiedgg.herokuapp.com/">
        <PortfolioItem name="Unified GG" image={Proj2}/>
      </a>
      <a href="https://github.com/Blaize95/Team-Profile-Generator">
        <PortfolioItem name="Team Profile Generator" image={Proj3}/>
      </a>
      <a href="https://blaizes-note-taker-app.herokuapp.com/">
        <PortfolioItem name="Note Taker App" image={Proj4}/>
      </a>
      <a href="https://blaize95.github.io/blaize-portfolio/">
        <PortfolioItem name="CSS/HTML Portfolio" image={Proj5}/>
      </a>
      <a href="https://blaize95.github.io/quiz/">
        <PortfolioItem name="Quiz App" image={Proj6}/>
      </a>
           
    </div>
  </div>;
}

export default Portfolio;
