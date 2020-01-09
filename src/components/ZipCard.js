import React, { Component } from 'react';
import './styles/ZipStyles.css';

//Card Component that displays the information after pressing Submit and maing a request.
//Currently, this is hardcoded placeholder information for New York City (this is the card that will show up no matter what is typed and submitted into the search bar)
//The ZipCards component should be the parent component of future unique cards.
class ZipCard extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		//Use the map function for arrays to iterate through each zipcode
		//and output the relevant data as formatted below.
		return (

			// <li key={zipcode.cityState}>
			<div className="zipContainer">

				<div className="zipCardList">
					<h2>{this.props.zipcode}</h2>
				</div>

			</div>
		);
	}
}

export default ZipCard;