import React, { Component } from 'react';
import './styles/SearchWithZipcodeStyles.css';
import ZipCards from './ZipSearch.js';

//SearchComponent should be controlling the search bar, requests, and so forth.
//For now, it only brings up hardcoded card information.
class CitySearch extends Component {

	constructor(props) {
		super(props);
		this.state = {
			/*stores city in the state when it is submitted by pressing enter */
			cityInput: "",	
			/*when this is true, the component fetches data from the API 
			* and updates its parent. When this is false, any kind of state 
			* update can happen without causing the lifecycle update */
			newSearch: false,	
			/* This should be set by the parent to a callback function. It
			* should be bound to the parent's "this." This callback will be
			* called when the API responds with data and it has been processed
			* by this component. It will be passed an array of JSON objects. */
			updateParent: this.props.updateParent
		}
		this.tempCityInput = "";
	}

	handleKeyPress = (event) => {
		if(event.key === 'Enter') {
			//Make sure the event is detected
			console.log('Enter was pressed!')

			//Change zipcodeInput to reflect what was submitted upon "submitting" aka pressing enter
			this.setState({
				cityInput: this.tempCityInput,
				newSearch: true
			});
			//Testing - needs work
			console.log(this.state.cityInput);
		}
	}

	/**
	* This is a lifecycle method called whenever the state changes. We
	* only care when a NewSearch is initiated, and not any other state
	* changes. When a new search is entered, an asynchronous call to
	* the zipcode API is made. The callback function given by the parent
	* will be called when the data is received and processed.
	* See the prop handleSearch. 
	*/
	componentWillUpdate(nextProps, nextState) {
		if(nextState.newSearch === true) {
			//initiate API call
			var uppercaseCity = nextState.cityInput.toUpperCase();
			console.log("http://ctp-zip-api.herokuapp.com/city/" + uppercaseCity);
			window.fetch("http://ctp-zip-api.herokuapp.com/city/" + uppercaseCity)
			//once the data is received, convert to json
			.then((response) => {
				return response.json();
			})
			//once JSON has been parsed, begin processing the data
			.then((json) => {
				//this array will hold the data in a form used by cards
				var data = [];
				for(var i = 0; i < json.length; i++) {
					data.push({
						zipcode: json[i]
					});
				}
				//stop future updates to the state from calling the API unecessarily, until 
				//the city input changes and newSearch becomes true again
				this.setState({newSearch: false});
				//at the end of the callback, update the parent with this info
				this.state.updateParent(data);
			})
			//just in case anything went wrong
			.catch((error) => {
				console.log("Error: ", error);
			});
		}
	}

	handleInput = (event) => {
		this.tempCityInput = event.target.value;
		console.log(this.tempCityInput);
	}

	render() {
		return(

			<div>
				<h2><b>Enter City Name to search: </b></h2>
				<input placeholder="city name" type="text" name="cityname" onKeyPress={this.handleKeyPress} onChange={this.handleInput}/>
			</div>
		);
	}

}

export default CitySearch;