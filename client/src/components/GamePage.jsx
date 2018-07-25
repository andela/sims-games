import PropTypes from "prop-types";
import React from "react";
import logo from "../assets/spinner.andela.png";
import { getJSONData } from "../actions/data";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    const { id } = this.props.match.params;
    this.state = {
      gameStarted: false,
      id,
      shuffleArray: [],
      data: null,
      currentQuestion: '',
      startText: "START",
      nextQuestion: false,
      buttonDisabled: false,
    }
    this.handleBegin = this.handleBegin.bind(this);
    this.randomQuestion = this.randomQuestion.bind(this);
  }

  componentDidMount() {
    getJSONData(this.state.id, json => {
      this.setState({ data: json });
    });
  }

  handleBegin = () => {
    const shuffleArray = this.state.data.tasks.sort(() => 0.5 - Math.random());
    this.setState({
      gameStarted: true,
      shuffleArray
    }, () => {
      this.randomQuestion();
    });
  }

  randomQuestion = () => {
    const tempArr = this.state.shuffleArray;
    const currentQuestion = tempArr.pop();
    this.setState({
      currentQuestion
    });
  }

  handleRestart = () => {
    this.setState({
      gameStarted: false,
      currentQuestion: '',
      startText: "START",
      nextQuestion: false,
      buttonDisabled: false,
    });
  }

  handleStart = (e) => {
    this.setState({
      buttonDisabled: true,
    }, () => {
      if (this.state.nextQuestion) {
        this.randomQuestion();
        this.setState({
          startText: "START",
          nextQuestion: false,
          buttonDisabled: false,
        });
      } else {
        let counter = 15;

        this.setState({
          startText: counter,
        });

        let timer = setInterval(() => {
          counter--;
          if (counter === 0 || !this.state.gameStarted) {
            if (this.state.gameStarted) {
              this.setState({
                startText: "NEXT",
                nextQuestion: true,
                buttonDisabled: false,
              });
            }
            clearInterval(timer);
          } else {
            this.setState({
              startText: counter,
            });
          }
        }, 1000);
      }
    });

  }

  render() {
    const buttonDisabled = this.state.buttonDisabled ? 'disable' : '';
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
        {this.state.data !== null && <div className="content-body">
          <div className="scenario-container">
            <div className="scenario-box-tag-container">
              <div className="scenario-tag">SCENARIO</div>
              <div className="scenario-box">
                <div className="scenario-border"></div>
                <div className="scenario-text">{this.state.data.context}?</div>
              </div>
            </div>
          </div>
          {!this.state.gameStarted && <div className="begin-div-container">
            <div className="button" onClick={() => this.handleBegin()}>BEGIN</div>
          </div>}
          {this.state.gameStarted && <div className="container">
            <div className="question-container">
              <div className="question-box">
               <div className="question-inner">
                <div className="question-text">{this.state.currentQuestion}?</div>
               </div>
              </div>
            </div>
            <div className="button-container">
              <button id='startButton' className={`button start ${buttonDisabled}`} disabled={this.state.buttonDisabled} onClick={this.handleStart}>{this.state.startText}</button>
              <button id='restartButton' className="button" onClick={() => this.handleRestart()}>RESTART</button>
            </div>
          </div>}
        </div>}
      </div>
    );
  }
};

LandingPage.propTypes = {};

export default LandingPage;
