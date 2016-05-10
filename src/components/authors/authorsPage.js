"use strict"; 

var React = require('react'); 
var Link = require('react-router').Link; 
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var AuthorList = require('./authorList');

var AuthorPage = React.createClass({

	getInitialState(){
		return {
			authors:AuthorStore.getAllAuthors()
		};
	},

    componentWillMount: function() {
        AuthorStore.addChangeListener(this._onChange);
    },
    
    componentWillUnmount: function() {
        AuthorStore.removeChangeListener(this._onChange);
    },
	_onChange(){
		this.setState({authors: AuthorStore.getAllAuthors()}); 

	},

	render(){
		return (
			<div> 
				<h1> Authors </h1>
				<Link to="addAuthor" className="btn btn-default">Add Author</Link>
				<AuthorList authors={this.state.authors}/>
			</div>
			);
	}
});

module.exports = AuthorPage; 