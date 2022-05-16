import React, { Component } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container ">
              <a className="navbar-brand" href="index.html">
                <span>HARU（春）</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="watches.html">
                      {" "}
                      Watches{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      {" "}
                      About{" "}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <div className="user_option-box">
                  <a href="">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-cart-plus" aria-hidden="true"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-search" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
      // <header>
      //   <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
      //     <Container>
      //       <NavbarBrand tag={Link} to="/">HaruProject</NavbarBrand>
      //       <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      //       <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
      //         <ul className="navbar-nav flex-grow">
      //           <NavItem>
      //             <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
      //           </NavItem>
      //           <NavItem>
      //             <NavLink tag={Link} className="text-dark" to="/counter">Counter</NavLink>
      //           </NavItem>
      //           <NavItem>
      //             <NavLink tag={Link} className="text-dark" to="/fetch-data">Fetch data</NavLink>
      //           </NavItem>
      //         </ul>
      //       </Collapse>
      //     </Container>
      //   </Navbar>
      // </header>
    );
  }
}
