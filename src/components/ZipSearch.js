import React, { Component } from 'react';
import './styles/ZipStyles.css';

//Card Component that displays the information after pressing Submit and maing a request.
//Currently, this is hardcoded placeholder information for New York City (this is the card that will show up no matter what is typed and submitted into the search bar)
//The ZipCards component should be the parent component of future unique cards.
class ZipCards extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					//City, State
					cityState: "New York, NY",
					//State
					state: "NY",
					//Location
					location: "(40.71, -73.99)",
					//Population (estimated)
					population: "40683",
					//Total Wages
					wages: "1412438620"
				}
			]
		};
	}

	render() {
		//Use the map function for arrays to iterate through each zipcode
		//and output the relevant data as formatted below.
		var zipcards = this.state.data.map((zipcode) =>

			// <li key={zipcode.cityState}>
			<div className="zipContainer" key={zipcode.cityState}>

					<div className="zipCardList">
						<h2>{zipcode.cityState}</h2>
						<li><p><b>State: </b>{zipcode.state}</p></li>
						<li><p><b>Location: </b>{zipcode.location}</p></li>
						<li><p><b>Population (estimated): </b>{zipcode.population}</p></li>
						<li><p><b>Total Wages: </b>{zipcode.wages}</p></li>
					</div>

			</div>
		);
		return (

			<div className="zipcards-container">
				<ul className="zipcards">
					{zipcards}
				</ul>
			</div>

		);
	}
}

export default ZipCards;