import React, { Component } from "react";
import "./menu-button.css";

class MenuButton extends Component {
  render() {
    return (
      <button
        className="c-menu-button"
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}

export default MenuButton;
