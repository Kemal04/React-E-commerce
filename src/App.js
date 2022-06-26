import React, { Component } from 'react'
import Login from './components/Login';
import Navbar from './components/Navbar';
import ShoppingCard from './components/ShoppingCard';

class App extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<ShoppingCard />
			</div>
		)
	}
}

export default App;