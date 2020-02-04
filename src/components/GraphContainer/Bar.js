import React, { Component } from 'react';
import './GraphContainer.css';

class Bar extends Component {
	render() {
		return (
			<div className="Bar" style={this.props.style}>
			  {this.props.children}
			</div>
		);
	}
}

export default Bar;
