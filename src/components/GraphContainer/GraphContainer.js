import React, { Component } from 'react';
import './GraphContainer.css';

class GraphContainer extends Component {
	render() {
		return (
			<div className="GraphContainer">
			  {this.props.children}
			</div>
		);
	}
}

export default GraphContainer;
