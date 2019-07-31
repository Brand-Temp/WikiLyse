import React, { Component } from 'react';
import logo from './logo.svg';
import pie from './images/piegraph.png';
import articleDist from './images/articledistribution.png';
import usersTypes from './images/usertypeyear.png';
import './LandingPage.css';


class LandingPage extends Component {
  render() {
    return(
      <div class='content-wrapper'>
        <div class='content'>
          <h1>Welcome to WikiLyse!</h1>
          <br /><br /><br />
          <div class="landingpageContainer">
            <div class="landingpageContent">
              <p>WikiLyse is a platform for generating data analytics from select Wikipedia Articles.</p>
            </div>
            <div class="landingpageContent">
              <img class="landingpageImg" src={pie} alt="" />
            </div>
            <div class="landingpageContent">
              <img class="landingpageImg" src={articleDist} alt="" />
            </div>
            <div class="landingpageContent">
              <p>WikiLyse can help you visiualise how articles have changed over time, how they grow.</p>
            </div>
            <div class="landingpageContent">
              <p>View dynamic statistics, updated in real time, for real people.</p>
            </div>
            <div class="landingpageContent">
              <img class="landingpageImg" src={usersTypes} alt="" />
            </div>
          </div>
        </div>
    </div>
    );
  }
}

export default LandingPage;