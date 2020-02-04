import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
	render() {
		return (
			<div className="NavBar">
				<h1>UFO Sightings by State</h1>
				<a href="#" className="NavBtn">Home</a>
				<a href="#" className="NavBtn">About</a>
			</div>
		);
	}
}

export default NavBar;
