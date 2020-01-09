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

	handleUpdate(data) {
		this.setState({cardData: data});
	}

	render() {
		return (
			<div>
				<SearchComponent handleSearch={this.handleUpdate}></SearchComponent>
				<div>
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