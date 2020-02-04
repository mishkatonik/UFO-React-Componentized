import React, { Component } from 'react';
import './StateCheckboxContainer.css';

class StateCheckBoxContainer extends Component {
	render() {
		return (
			<div className="StateCheckboxContainer">
				{this.props.children}
			</div>
		);
	}
}

export default StateCheckBoxContainer;
