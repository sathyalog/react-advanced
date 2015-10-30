var React = require('react');
var ReactDOM = require('react-dom');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var Carousel = React.createClass({
	getInitialState: function () {
		return {
			items: ['a', 'b', 'c'],
			currentItem: 0
		}
	},

	nextItem: function () {
		var c = this.state.currentItem + 1;
		c = c === 3 ? 0 : c;
		this.setState({
			currentItem: c
		});
	},

	prevItem: function () {
		var c = this.state.currentItem - 1;
		c = c === -1 ? 2 : c;
		this.setState({
			currentItem: c
		});
	},

	render: function () {
		var items = this.state.items.map(function (item, i) {
			if (this.state.currentItem === i) return <div key={item}>{item}</div>;
		}.bind(this));
		return (
			<div>
				<button onClick={this.prevItem}>Prev</button>
				<ReactCSSTransitionGroup transitionName="example" transitionLeave={false} transitionEnterTimeout={300} transitionLeaveTimeout={300} >
		          {items}
		        </ReactCSSTransitionGroup>
				<button onClick={this.nextItem}>Next</button>
			</div>
		)
	}
});

ReactDOM.render(<Carousel />, document.getElementById('app'));
