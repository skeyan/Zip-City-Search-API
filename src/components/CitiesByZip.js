import React, { Component } from 'react';
import './styles/ZipStyles.css';
import SearchComponent from './SearchWithZipcode.js';
import CityCard from './ZipSearch.js';

class CitiesByZipContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cardData: []
		}
		this.handleUpdate = this.handleUpdate.bind(this);
	}

	/**
	* This method takes data from the search bar child component.
	* The card children will be update with this data.
	* @param data  an array of objects with keys cityState, state, population, wages and coordinates.
	*/
	handleUpdate(data) {
		this.setState({cardData: data});
	}

	render() {
		return (
			<div>
				{/* The search bar needs to be given a callback function by 
				the parent, so they can communicate and "lift state up" 
				when the API responds with data */}
				<SearchComponent updateParent={this.handleUpdate}></SearchComponent>
				<div>
					{/* List of all cards for each piece of data from API */}
					{this.state.cardData.map((value, index) => (
						<CityCard key={index} 
								cityState={value.cityState} 
								state={value.state} 
								population={value.population} 
								wages={value.wages} 
								coordinates={value.coordinates}></CityCard>
					))}
				</div>
			</div>
		);
	}
}

export default CitiesByZipContainer;