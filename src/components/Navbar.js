import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        Logo
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink style={({ isActive }) => ({ color: isActive ? "white" : null })} to="/" className="nav-link">Login</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/customers" className="nav-link">Customers</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/cart" className="nav-link">Cart</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;