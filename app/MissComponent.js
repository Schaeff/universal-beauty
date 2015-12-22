/** @jsx React.DOM */
var React = require('react');

var MissComponent = React.createClass({

	renderButtons: function() {
		var that = this;
		return(
			this.props.choices.map(function(miss, index) {
				return(
					<button onClick={that.onChooseCountry.bind(null, index)}>{miss.country}</button>
				)
			})
		)
	},

	onChooseCountry: function(index, event) {
		event.preventDefault();
		this.props.choices[index].country === this.props.miss.country ? this.props.onWin() : this.props.onFail()
	},

	render: function() {
		return (
			<div>
				<h1>{this.props.miss.name}</h1>
				{this.renderButtons()}
				<br></br>
				<img src={this.props.miss.imgL} />
				<button onClick={this.onChooseCountry} />
			</div>
		);
	}
	
});
	
module.exports = MissComponent;
