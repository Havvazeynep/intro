import React, { Component } from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import CartSummary from "./cartSummary";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <div>
            <Nav pills>
              <NavItem>
                <NavLink disabled href="#">
                  NORTWIND APP
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink active href="#">
                  Link
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Another Link</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Disabled Link</NavLink>
              </NavItem>
              <CartSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart} />
            </Nav>
        </div>
      </div>
    );
  }
}
