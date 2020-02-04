import React, { Component } from 'react';
import './StateCheckboxContainer.css';

class CheckboxItem extends Component {
	render() {
		return (
			<label>
			  <input 
			    className="checkboxItem"
			    type="checkbox" 
			    value={this.props.selectedState}
			    onClick={this.props.onClick}
			  />
			  	{this.props.selectedState}
			</label>
		);
	}
}

export default CheckboxItem;