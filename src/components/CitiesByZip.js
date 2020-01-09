import React, { Component } from 'react';
import './styles/ZipStyles.css';

class CitiesByZipContainer extends Component {
	constructor() {
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
			<SearchComponent handleSearch={this.handleUpdate}></SearchComponent>
			<div>
				{this.state.cardData.map((value, index) => {
					<CityCard key={index} cityState={value.location} state={value.state} population={value.population} wages={value.wages} latitude={value.latitude} longitude={value.longitude}></CityCard>
				})}
			</div>
		);
	}
}

export default CitiesByZipContainer;