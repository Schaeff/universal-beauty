/** @jsx React.DOM */
var React = require('react');
var MissComponent = require('./MissComponent.js')
var misses = require('../dist/misses.json')
var shuffle = require('./shuffle.js')

var App = React.createClass({
	getInitialState: function() {
		return ({
			index: 0,
			win: 0,
			fail: 0
		})
	},

	nextMiss: function(event) {
		this.setState({
			index: (this.state.index + 1) % misses.length
		})
	},

	onWin: function() {
		this.setState({
			win: this.state.win + 1
		})
		this.nextMiss()
	},

	onFail: function() {
		this.setState({
			fail: this.state.fail + 1
		})
		this.nextMiss()
	},

	generateChoices: function() {
		var withoutMiss = misses.slice();
		withoutMiss.splice(this.state.index, 1);
		withoutMiss.sort( function() { return 0.5 - Math.random() } );
		console.log(this.state.index)
		console.log(misses)
		var choices = withoutMiss.slice(0, 2)
		choices.push(misses[this.state.index])
		console.log(choices)
		return shuffle(choices)

	},

	render: function() {
		return ( 
			<div>
				<h1>Wins: {this.state.win} Fails: {this.state.fail}</h1>
				< MissComponent miss = {misses[this.state.index]} choices={this.generateChoices()} onFail={this.onFail} onWin={this.onWin} />
			</div>
		);
	}

});

module.exports = App;