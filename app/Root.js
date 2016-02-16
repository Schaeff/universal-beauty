/** @jsx React.DOM */
var React = require('react');
var App = require('./App.js');



var Root = React.createClass({

	getInitialState: function() {
		return ({
			appState: 0
		})
	},

	onStart: function(event) {
		event.preventDefault();
		console.log("hey")
		this.setState({
			appState: 1
		})
	},

	renderWelcome: function() {
		return(
			<button onClick={this.onStart}>Start</button>
		)
	},

	render: function() {
		console.log(this.state.appState)
		if(this.state.appState === 0) {
			return this.renderWelcome()
		}
		return ( 
			<App />
		);
	}

});

module.exports = Root;