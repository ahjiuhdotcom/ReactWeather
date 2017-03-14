var React = require('react');
var ReactDOM = require('react-dom');
// var Route = require('react-router').Route
var { Route, Router, IndexRoute, hashHistory } = require('react-router');

var Main = require('Main');
var Weather = require('Weather');
var About =  require('About');
var Examples = require('Examples');

// Load foundation
// 'css!' is css loader teach program how to load the file
// 'style!' is style loader use to inject the file into html so that the style actually show up
require('style!css!foundation-sites/dist/foundation.min.css')
// use jquery to select the document and call the foundation method
$(document).foundation();

// What to render by react-dom
// document.getElementById('app') is the location to render the component
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Main }>
      <Route path="about" component={ About }/>
      <Route path="examples" component={ Examples }/>
      <IndexRoute component={ Weather } />
    </Route>
  </Router>,
  document.getElementById('app') // Where to render
);
