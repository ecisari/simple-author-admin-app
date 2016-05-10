var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({

	render(){
		return (
			<nav className="navbar navbar">
			<div className="container">
				<Link to="app" className="navbar-brand">
				<img src="images/meow.png" height="30px" width="30px"/>
				</Link>
				<ul className="nav navbar-nav">
				  <li><Link to="app">Home</Link></li>
                  <li><Link to="authors">Authors</Link></li>
                  <li><Link to="about">About</Link></li>
				</ul>
			</div>
			</nav>
		);

	}



});


module.exports = Header; 