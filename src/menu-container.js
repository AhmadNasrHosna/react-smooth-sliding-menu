import React, { Component } from "react";
import MenuButton from "./menu-button";
import Menu from "./menu";

class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      visible: false,
    };

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <div className="o-page">
        <main className="o-main">
          <MenuButton handleMouseDown={this.handleMouseDown} />
          <Menu
            handleMouseDown={this.handleMouseDown}
            menuVisibility={this.state.visible}
          />
          <h1>It was going to be a lonely trip back.</h1>
          <p>
            Gaiwan ceylon strainer hong kong-style milk white oolong assam
            pu’erh camellia sinensis rize strainer.
          </p>
        </main>
      </div>
    );
  }
}

export default MenuContainer;
