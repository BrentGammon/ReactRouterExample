import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './navbar';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
//import NestedRoute from './NestedRoute';
import NestedTest from './NestedTest';

class Index extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={NavBar}>
          <IndexRoute component={App}></IndexRoute>
          <Route path="Component1" component={Component1}/>
          <Route path="Component1/nested" component={NestedTest}/>
          <Route path="Component2" component={Component2}/>
          <Route path="Component3" component={Component3}/>
        </Route>
      </Router>
    );
  }
}




ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
