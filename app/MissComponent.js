/** @jsx React.DOM */
var React = require('react');

var MissComponent = React.createClass({

	getInitialState: function() {
		return({
			selected: -1
		})
	},

	renderButtons: function() {
		var that = this;
		return(
			this.props.choices.map(function(miss, index) {
				return(
					<button onClick={that.onChooseCountry.bind(null, index)} style={(index === that.state.selected) ? answerStyle : null}>{miss.country}</button>
				)
			})
		)
	},

	onChooseCountry: function(index, event) {
		event.preventDefault();
		this.setState({
			selected: index
		})
		this.props.choices[index].country === this.props.miss.country ? this.props.onWin() : this.props.onFail()
	},

	render: function() {
		return (
			<div>
				{this.renderButtons()}
				<br></br>
				<img src={this.props.miss.imgL} />
			</div>
		);
	}
	
});

var answerStyle = {
  color: '#00FF00',
};
	
module.exports = MissComponent;
