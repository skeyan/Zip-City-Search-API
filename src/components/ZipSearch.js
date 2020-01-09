import React, { Component } from 'react';
import './styles/ZipStyles.css';

//Card Component that displays the information after pressing Submit and maing a request.
//Currently, this is hardcoded placeholder information for New York City (this is the card that will show up no matter what is typed and submitted into the search bar)
//The CityCards component should be the parent component of future unique cards.
class CityCard extends Component {
	
	//Could remove this with a function and get rid of the "this" because it's a presentational component
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
					<h2>{this.props.cityState}</h2>
					<li><b>State: </b>{this.props.state}</li>
					<li><b>Location: </b>{this.props.coordinates}</li>
					<li><b>Population (estimated): </b>{this.props.population}</li>
					<li><b>Total Wages: </b>{this.props.wages}</li>
				</div>

			</div>
		);
	}
}

export default CityCard;