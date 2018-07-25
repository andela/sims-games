import React, { Component } from "react";
import logo from "../assets/spinner.andela.png";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
  }

  onCardClick(id) {
    this.props.history.push("/play/" + id);
  }

  render() {
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
              <div
                className="gameCard card text-center"
                onClick={() => this.onCardClick(1)}
              >
                <div className="card-body mt-5">
                  <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                    <i className="fa fa-video-camera fa-4x gameCardIcon" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="m-0 gameCardText">Kick Off Call</p>
                </div>
              </div>
            </div>

            <div className="com-md-4">
              <div
                className="gameCard card text-center"
                onClick={() => this.onCardClick(3)}
              >
                <div className="card-body mt-5">
                  <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                    <i className="fa fa-user fa-4x gameCardIcon" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="m-0 gameCardText">Chief Technical Officer</p>
                </div>
              </div>
            </div>
            <div className="com-md-4">
              <div
                className="gameCard card text-center"
                onClick={() => this.onCardClick(2)}
              >
                <div className="card-body mt-5">
                  <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                    <i className="fa fa-user fa-4x gameCardIcon" />
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
              <div
                className="gameCard card text-center"
                onClick={() => this.onCardClick(6)}
              >
                <div className="card-body mt-5">
                  <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                    <i className="fa fa-user fa-4x gameCardIcon" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="m-0 gameCardText">Technical Team Lead</p>
                </div>
              </div>
            </div>
            <div className="com-md-4">
              <div
                className="gameCard card text-center"
                onClick={() => this.onCardClick(5)}
              >
                <div className="card-body mt-5">
                  <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                    <i className="fa fa-users fa-4x gameCardIcon" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="m-0 gameCardText">Team Storming</p>
                </div>
              </div>
            </div>
            <div className="com-md-4">
              <div
                className="gameCard card text-center"
                onClick={() => this.onCardClick(4)}
              >
                <div className="card-body mt-5">
                  <div className="fa-stack-open-border d-flex justify-content-center align-items-center">
                    <i className="fa fa-users fa-4x gameCardIcon" />
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
  }
}

LandingPage.propTypes = {};
export default LandingPage;
