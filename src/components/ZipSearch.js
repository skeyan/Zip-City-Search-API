import React, { Component } from 'react';
import './styles/ZipStyles.css';

//Card Component that displays the information after pressing Submit and maing a request.
//Currently, this is hardcoded placeholder information for New York City (this is the card that will show up no matter what is typed and submitted into the search bar)
//The ZipCards component should be the parent component of future unique cards.
class CityCard extends Component {
	
	constructor(props) {
		super(props);
	}

	render() {
		//Use the map function for arrays to iterate through each zipcode
		//and output the relevant data as formatted below.
		return (

			// <li key={zipcode.cityState}>
			<div className="zipContainer" key={zipcode.cityState}>

				<div className="zipCardList">
					<h2>{this.props.cityState}</h2>
					<li><p><b>State: </b>{this.props.state}</p></li>
					<li><p><b>Location: </b>{this.props.location}</p></li>
					<li><p><b>Population (estimated): </b>{this.props.population}</p></li>
					<li><p><b>Total Wages: </b>{this.props.wages}</p></li>
				</div>

			</div>
		);
	}
}

export default CityCard;