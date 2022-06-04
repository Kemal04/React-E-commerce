import React, { Component } from 'react'

class MainContent extends Component {

    state = {
        pageTitle: "Employees",
        customersCount: 5,
        customers: [
            { id: 1, name: "Kemal", phone: "+993 63 29-78-77", address: { city: "Ashgabat" } },
            { id: 2, name: "Yunus", phone: "+993 65 44-56-22", address: { city: "New York" } },
            { id: 3, name: "Mergen", phone: "+993 62 56-77-55", address: { city: "London" } },
            { id: 4, name: "Kerim", phone: "+993 64 26-08-37", address: { city: "Afrika" } },
        ]
    };

    render() {
        return (
            <div>
                <div className='h4 border-bottom p-1 m-1'>
                    {this.state.pageTitle}
                    <span className='badge bg-secondary m-2'>{this.state.customersCount}</span>
                    <button className='btn btn-info text-white' onClick={this.onRefreshClick}>Refresh</button>
                </div>
                <table className='table mt-5'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((cust) => {
                                return (
                                    <tr key={cust.id}>
                                        <td>{cust.id}</td>
                                        <td>{cust.name}</td>
                                        <td>{cust.phone}</td>
                                        <td>{cust.address.city}</td>
                                    </tr>
                                );
                            })
                        }

                    </tbody>
                </table>
            </div >
        )
    }

    onRefreshClick = () => {
        this.setState({
            customersCount: 7
        })
    }

}

export default MainContent;