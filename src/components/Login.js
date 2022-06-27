import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = { email: "", password: "", message: "" }
    }

    render() {
        return (
            <div className='container'>
                <h4 className='h4 border-bottom my-5 pb-3'>Login</h4>
                <div>
                    <div className='text-center fw-bold mb-3'>{this.state.message}</div>
                    <div className="mb-3">
                        <label className="form-label">Email address</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={(event) => { this.setState({ email: event.target.value }) }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={(event) => { this.setState({ password: event.target.value }) }} />
                    </div>
                    <button className="btn btn-primary" onClick={this.onLoginClick}>Submit</button>
                </div>
            </div>
        )
    }

    onLoginClick = async () => {
        console.log(this.state);

        var response = await fetch(`http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
            { method: "GET" }
        );

        var body = await response.json();
        console.log(body);

        if (body.length > 0) {
            //succcess
            this.setState(
                { message: (<span className='text-success'>Successfully Logged-in :)</span>) },
            )
        } else {
            //error
            this.setState({ message: (<span className='text-danger'>InValid Login !</span>) })
        }
    }

}

export default Login