import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Login from './components/Login';
import ShoppingCard from './components/ShoppingCard';
import Dashboard from './components/Dashboard';
import CustomerList from './components/CustomersList';
import Page404 from './components/Page404';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Routes,
	Link,
} from "react-router-dom";

class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />

				<Routes>

					<Route path='/' element={<Login />} />
					<Route path='/dashboard' element={<Dashboard />} />
					<Route path='/customers' element={<CustomerList />} />
					<Route path='/cart' element={<ShoppingCard />} />
					<Route path='*' element={<Page404 />} />

				</Routes>
			</Router>
		)
	}
}

export default App;