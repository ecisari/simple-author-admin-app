"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Home = React.createClass({
	render() {
		return (
			<div className="container">
				<div className="jumbotron jumbotron-fluid">
					<h1> Henry's Simple Author Admin App!</h1>
					<p> React, React Router, and Flux app for teaching myself these technologies</p> 
					<Link to="about" className="btn btn-primary btn-lg">Check it ouuut</Link>
				</div>
			</div>
		);
	}
});

module.exports = Home; 