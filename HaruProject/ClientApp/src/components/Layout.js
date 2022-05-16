import React, { Component } from "react";
import { Container } from "reactstrap";
import Footer from "./Shared/Footer";
import { NavMenu } from "./Shared/NavMenu";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <>{this.props.children}</>
        <Footer />
      </div>
    );
  }
}
