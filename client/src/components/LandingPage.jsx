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
      <div className="mb-5">
        <h2>SIMULATIONS SKILL SESSION</h2>
      </div>
        <h4>Choose a game</h4>
        <div className="gameCategories row  justify-content-center">
          <div className="com-md-4">
            <div className="gameCard card text-center">
              <div className="card-body mt-5">
                <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                  <i class="fa fa-video-camera fa-4x gameCardIcon" />
                </div>
              </div>
              <div className="p-3">
                <p className="m-0 gameCardText">Kick Off Call</p>
              </div>
            </div>
          </div>

          <div className="com-md-4">
            <div className="gameCard card text-center">
              <div className="card-body mt-5">
                <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                  <i class="fa fa-user fa-4x gameCardIcon" />
                </div>
              </div>
              <div className="p-3">
                <p className="m-0 gameCardText">Chief Technical Officer</p>
              </div>
            </div>
          </div>
          <div className="com-md-4">
            <div className="gameCard card text-center">
              <div className="card-body mt-5">
                <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                  <i class="fa fa-user fa-4x gameCardIcon" />
                </div>
              </div>
              <div className="p-3">
                <p className="m-0 gameCardText">Product Owner</p>
              </div>
            </div>
          </div>
        </div>
        <div className="gameCategories row  justify-content-center">
          <div className="com-md-4">
            <div className="gameCard card text-center">
              <div className="card-body mt-5">
                <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                  <i class="fa fa-user fa-4x gameCardIcon" />
                </div>
              </div>
              <div className="p-3">
                <p className="m-0 gameCardText">Technical Team Lead</p>
              </div>
            </div>
          </div>
          <div className="com-md-4">
            <div className="gameCard card text-center">
              <div className="card-body mt-5">
                <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                  <i class="fa fa-users fa-4x gameCardIcon" />
                </div>
              </div>
              <div className="p-3">
                <p className="m-0 gameCardText">Team Storming</p>
              </div>
            </div>
          </div>
          <div className="com-md-4">
            <div className="gameCard card text-center">
              <div className="card-body mt-5">
                <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                  <i class="fa fa-users fa-4x gameCardIcon" />
                </div>
              </div>
              <div className="p-3">
                <p className="m-0 gameCardText">Team Performing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LandingPage.propTypes = {};

export default LandingPage;
