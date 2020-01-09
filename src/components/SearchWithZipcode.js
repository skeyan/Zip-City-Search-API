import React, { Component } from 'react';
import './styles/SearchWithZipcodeStyles.css';
import ZipCards from './ZipSearch.js';

//SearchComponent should be controlling the search bar, requests, and so forth.
//For now, it only brings up hardcoded card information.
class SearchComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			zipcodeInput: "",
			newSearch: false,
			updateParent: this.props.handleSearch
		}
		this.tempZipInput = "";
	}

	handleKeyPress = (event) => {
		if(event.key === 'Enter') {
			//Make sure the event is detected
			console.log('Enter was pressed!')

			//Change zipcodeInput to reflect what was submitted upon "submitting" aka pressing enter
			this.setState({
				zipcodeInput: this.tempZipInput,
				newSearch: true
			});
			//Testing - needs work
			console.log(this.state.zipcodeInput);
		}
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextState.newSearch === true) {
			//replace with API call
			var hardcoded = [{"RecordNumber":"240","Zipcode":"10016","ZipCodeType":"STANDARD","City":"NEW YORK","State":"NY","LocationType":"PRIMARY","Lat":"40.71","Long":"-73.99","Xaxis":"0.20","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"New York, NY","Location":"NA-US-NY-NEW YORK","Decommisioned":"false","TaxReturnsFiled":"31673","EstimatedPopulation":"40683","TotalWages":"1412438620","Notes":""},{"RecordNumber":"241","Zipcode":"10016","ZipCodeType":"STANDARD","City":"MANHATTAN","State":"NY","LocationType":"NOT ACCEPTABLE","Lat":"40.71","Long":"-73.99","Xaxis":"0.20","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"Manhattan, NY","Location":"NA-US-NY-MANHATTAN","Decommisioned":"false","TaxReturnsFiled":"31673","EstimatedPopulation":"40683","TotalWages":"1412438620","Notes":""},{"RecordNumber":"242","Zipcode":"10016","ZipCodeType":"STANDARD","City":"NYC","State":"NY","LocationType":"NOT ACCEPTABLE","Lat":"40.71","Long":"-73.99","Xaxis":"0.20","Yaxis":"-0.72","Zaxis":"0.65","WorldRegion":"NA","Country":"US","LocationText":"Nyc, NY","Location":"NA-US-NY-NYC","Decommisioned":"false","TaxReturnsFiled":"31673","EstimatedPopulation":"40683","TotalWages":"1412438620","Notes":""}];
			//this will be the callback
			var data = [];
			var k = hardcoded.length * Math.random();
			console.log("Got " + k + " elements from API");
			for(var i = 0; i < k; i++) {
				data.push({
					cityState: hardcoded[i].LocationText,
					state: hardcoded[i].State,
					coordinates: hardcoded[i].Lat + ", " + hardcoded[i].Long,
					population: hardcoded[i].EstimatedPopulation,
					wages: hardcoded[i].TotalWages
				});
			}
			this.setState({newSearch: false});
			//at the end of the callback, update the parent with this info
			this.state.updateParent(data);
		}
	}

	handleInput = (event) => {
		this.tempZipInput = event.target.value;
		console.log(this.tempZipInput);
	}

	render() {
		return(

			<div>
				<h2><b>Enter Zip Code to search: </b></h2>
				<input placeholder="zip code" type="text" name="zipcode" onKeyPress={this.handleKeyPress} onChange={this.handleInput}/>
			</div>
		);
	}

}

export default SearchComponent;