import React from "react";
import logo from "../assets/spinner.andela.png";

const Header = props => (
  <div className="app-header">
    <a className="brand" href="/">
      <img
        src={logo}
        alt="app-logo"
        width="35"
        align="middle"
        className="app-logo"
        role="presentation"
      />{" "}
      SIMS Games
    </a>
    {props.title && <span className="a"><div className="b">{props.title}</div></span>}
  </div>
);

export default Header;
