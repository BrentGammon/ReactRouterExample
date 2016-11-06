import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './navbar';
import Component1 from './component1';
import Component2 from './component2';
import Component3 from './component3';
import NestedRouteNav from './NestedRouteNav';
import {Router,Route,IndexRoute,browserHistory} from 'react-router';
//import NestedRoute from './NestedRoute';
import NestedRoute1 from './NestedRoute1';
import NestedRoute2 from './NestedRoute2';
import NestedRoute3 from './NestedRoute3';
import NotFound from './NotFound';

class Index extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={NavBar}>
          <IndexRoute component={App}></IndexRoute>

          <Route path="component1" component={NestedRouteNav}>
              <IndexRoute component={Component1}></IndexRoute>
              <Route path="/component1/nestedroute1" component={NestedRoute1}/>
              <Route path="/component1/nestedroute2" component={NestedRoute2}/>
              <Route path="/component1/nestedroute3" component={NestedRoute3}/>
          </Route>



          <Route path="component2" component={Component2}/>
          <Route path="component3" component={Component3}/>
          <Route path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}




ReactDOM.render(
  <Index/>,
  document.getElementById('root')
);
