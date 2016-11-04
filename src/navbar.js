import React, { Component } from 'react';
import {Link} from 'react-router';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><p className="navbar-text">React Router Example</p></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/component1">Component1</Link></li>
              <li><Link to="/component2">Component2</Link></li>
              <li><Link to="/component3">Component3</Link></li>

            </ul>
          </div>
        </nav>

      {this.props.children}
      </div>
    );
  }
}

export default NavBar;
