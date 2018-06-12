import React, { Component } from 'react';

class BindMe extends Component {
	onClickMe() {
		console.log(this)
	}
	render() {
		return (
			<button className="Mybutton" onClick={this.onClickMe} type="button">
			Click Me
			</button>
		)
	}
}


export default BindMe;
