import React, { Component } from "react";
import Footer from './Footer';
import Header from './Header';
import ttl from "../assets/technical-team-lead.svg";
import owner from "../assets/owner.svg";
import chief from "../assets/chief.svg";
import performing from "../assets/team-performing.svg";
import storming from "../assets/team-storming.svg";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.onCardClick = this.onCardClick.bind(this);
  }

  componentDidMount(){
    if(localStorage.getItem('state')){
      socket.emit('conected', JSON.parse(localStorage.getItem('state')));
    }
  }

  onCardClick(id) {
    this.props.history.push("/play/" + id);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="app-body landing-page container-fluid pt-5">
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
                   <img src={chief} alt="chief" />
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
                    <img src={owner} alt="owner" />
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
                    <img src={ttl} alt="ttl" />
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
                    <img src={storming} alt="storming" />
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
                   <img src={performing} alt="performing" />
                  </div>
                </div>
                <div className="p-3">
                  <p className="m-0 gameCardText">Team Performing</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

LandingPage.propTypes = {};
export default LandingPage;
