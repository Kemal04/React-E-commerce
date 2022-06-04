import React, { Component } from 'react'
import MainContent from './components/MainContent';
import Navbar from './components/Navbar';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<MainContent />
			</div>
		)
	}
}

export default App;