"use strict";
var React = require('react');
var Router = require('react-router');

var About = React.createClass({
	
	render () {
		return (
			<div>
				<h1>About</h1>
				<p> A simple author admin app for adding, editing, and deleting authors.  </p> 
				<p> This application uses the following technologies </p> 
				<ul>
					<li>React</li>
					<li>React Router</li>
					<li>Node</li>
					<li>Flux</li>
					<li>Gulp</li>
					<li>Browserify</li>
					<li>Bootstrap</li> 
				</ul>
			</div>

		);
	}
});

module.exports = About; 