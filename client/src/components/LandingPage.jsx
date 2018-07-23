import PropTypes from "prop-types";
import React from "react";
import logo from "../assets/spinner.andela.png";

const LandingPage = props => {
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
      <div className="app-body container-fluid pt-5">
        <h2>SIMULATIONS SKILL SESSION</h2>
        <h4>Choose a game</h4>
        <div className="gameCategories row  justify-content-center">
          <div className="gameCard card text-center col-md-4 col-md-3">
            <div className="card-body">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x" />
                <i class="fa fa-video-camera fa-stack-1x gameCardIcon" />
              </span>
            </div>
            <div className="card-footer gameCardText">
              <p className="m-0">Kick Off Call</p>
            </div>
          </div>
          <div className="gameCard card text-center col-md-4 col-md-3">
            <div className="card-body">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x" />
                <i class="fa fa-user fa-stack-1x gameCardIcon" />
              </span>
            </div>
            <div className="card-footer gameCardText">
              <p className="m-0">Chief Technical Officer</p>
            </div>
          </div>
          <div className="gameCard card text-center col-md-4 col-md-3">
            <div className="card-body">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x" />
                <i class="fa fa-user fa-stack-1x gameCardIcon" />
              </span>
            </div>
            <div className="card-footer gameCardText">
              <p className="m-0">Product Owner</p>
            </div>
          </div>
          <div className="gameCard card text-center col-md-4 col-md-3">
            <div className="card-body">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x" />
                <i class="fa fa-user fa-stack-1x gameCardIcon" />
              </span>
            </div>
            <div className="card-footer gameCardText">
              <p className="m-0">Technical Team Lead</p>
            </div>
          </div>
          <div className="gameCard card text-center col-md-4 col-md-3">
            <div className="card-body">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x" />
                <i class="fa fa-users fa-stack-1x gameCardIcon" />
              </span>
            </div>
            <div className="card-footer gameCardText">
              <p className="m-0">Team Storming</p>
            </div>
          </div>
          <div className="gameCard card text-center col-md-4 col-md-3">
            <div className="card-body">
              <span class="fa-stack fa-4x">
                <i class="fa fa-circle fa-stack-2x" />
                <i class="fa fa-users fa-stack-1x gameCardIcon" />
              </span>
            </div>
            <div className="card-footer gameCardText">
              <p className="m-0">Team Performing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
