var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../containers/Main');
var StartMatchContainer = require('../containers/StartMatchContainer');
var MatchContainer = require('../containers/MatchContainer');

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={StartMatchContainer} />
      <Route path='match/:matchName' component={MatchContainer} /> 
    </Route>
  </Router>
);

module.exports = routes;