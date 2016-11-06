import React, { Component } from 'react';
import {Link} from 'react-router';
class NestedRouteNav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav">
              <li><p className="navbar-text">Nested Route</p></li>
              <li><Link to="/component1/nestedroute1">Nested Route 1</Link></li>
              <li><Link to="/component1/nestedroute2">Nested Route 2</Link></li>
              <li><Link to="/component1/nestedroute3">Nested Route 3</Link></li>
            </ul>
          </div>
        </nav>

      {this.props.children}
      </div>
    );
  }
}

export default NestedRouteNav;
