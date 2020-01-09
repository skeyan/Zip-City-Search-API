import React, { Component } from 'react';
import './styles/ZipStyles.css';
import CitySearch from './CitySearch.js';
import ZipCard from './ZipCard.js';

class ZipcodesByCityContainer extends Component {
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
				<CitySearch updateParent={this.handleUpdate}></CitySearch>
				<div>
					{/* List of all cards for each piece of data from API */}
					{this.state.cardData.map((value, index) => (
						<ZipCard key={index} 
								zipcode={value.zipcode} ></ZipCard>
					))}
				</div>
			</div>
		);
	}
}

export default ZipcodesByCityContainer;