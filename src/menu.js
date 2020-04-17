import React, { Component } from "react";
import "./menu.css";

class Menu extends Component {
  render() {
    let visibility = "is-hidden";

    if (this.props.menuVisibility) {
      visibility = "is-visible";
    }

    return (
      <ul
        onMouseDown={this.props.handleMouseDown}
        className={"c-flyout-menu " + visibility}
      >
        <li>
          <a href="#0">Home</a>
        </li>
        <li>
          <a href="#0">About</a>
        </li>
        <li>
          <a href="#0">Contact</a>
        </li>
        <li>
          <a href="#0">Search</a>
        </li>
      </ul>
    );
  }
}

export default Menu;
