import PropTypes from "prop-types";
import React from "react";
import logo from "../assets/spinner.andela.png";

const LandingPage = props => {
  const id = props.match.params.id;

  console.log(id);


  return (
    <div>
      <div className="app-header">
        <a className="brand">
          <img
            src={logo}
            alt="app-logo"
            width="35"
            align="middle"
            className="app-logo"
            role="presentation"
          />{" "}
          SIMS
        </a>
      </div>

      {/* BODY */}
      <div className="content-body">
        <div className="scenario-container">
          <div className="scenario-box-tag-container">
            <div className="scenario-tag">SCENARIO</div>
            <div className="scenario-box">
              <div className="scenario-border"></div>
              <div className="scenario-text">You are in the middle of an ocean and your boat is sinking, what would you do to survive?</div>
            </div>
          </div>
        </div>
        <div className="begin-div-container">
          <div className="button">BEGIN</div>
        </div>
        <div className="question-container">
          <div className="question-box">What is your name?</div>
        </div>
        <div className="button-container">
          <div className="button start">START</div>
          <div className="button">RESTART</div>
        </div>
      </div>
    </div>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
