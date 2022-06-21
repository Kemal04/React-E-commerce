import React, { Component } from 'react'

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

    onLoginClick = () => {
        console.log(this.state);
        if (this.state.email === "admin@gmail.com" && this.state.password === "12345678") {
            //succcess
            this.setState({ message: (<span className='text-success'>Successfully Logged-in :)</span>) })
        } else {
            //error
            this.setState({ message: (<span className='text-danger'>InValid Login !</span>) })
        }
    }

}

export default Login