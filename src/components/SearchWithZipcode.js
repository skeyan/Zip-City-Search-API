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
			searchToggle: false
		}
		this.tempZipInput = "";
	}

	handleKeyPress = (event) => {
		if(event.key === 'Enter') {
			//Make sure the event is detected
			console.log('Enter was pressed!')

			//Change zipcodeInput to reflect what was submitted upon "submitting" aka pressing enter
			this.setState({
				zipcodeInput: this.tempZipInput
			});
			//Testing - needs work
			console.log(this.state.zipcodeInput);

			//Reveal search (! This might need code restructuring both SearchComponent and ZipCards to a common parent so they have access to each other's states! Not finished.)
			this.setState({
				searchToggle: true
			});
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