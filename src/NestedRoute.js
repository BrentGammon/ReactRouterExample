import React, { Component } from 'react';
import {Link} from 'react-router';
class NestedRoute extends Component {
  render() {
    return (
        <Link to="component1/nested">Component1</Link>
    );
  }
}

export default NestedRoute;
