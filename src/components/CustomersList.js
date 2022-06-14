import React, { Component } from 'react'

class CustomersList extends Component {

    state = {
        pageTitle: "Customers",
        customersCount: 5,
        customers: [
            {
                id: 1,
                name: "Kemal",
                phone: "+993 63 29-78-77",
                address: { city: "Ashgabat" },
                photo: "https://picsum.photos/id/101/60",
            },
            {
                id: 2,
                name: "Yunus",
                phone: "+993 65 44-56-22",
                address: { city: "New York" },
                photo: "https://picsum.photos/id/102/60",
            },
            {
                id: 3,
                name: "Mergen",
                phone: "+993 62 56-77-55",
                address: { city: "London" },
                photo: "https://picsum.photos/id/107/60",
            },
            {
                id: 4,
                name: "Kerim",
                phone: null,
                address: { city: "Afrika" },
                photo: "https://picsum.photos/id/109/60"
            },
        ]
    };

    // customerNameStyle = (custName) => {
    //     if (custName.startsWith("K")) return "bg-success text-white";
    //     else if (custName.startsWith("Y")) return "bg-danger text-white";
    //     else return "border";
    // }

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
                        {this.getCustomerRow()}
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

    getPhoneToRender = (phone) => {
        if (phone) return phone;
        else {
            return <div>Phone Not Founded</div>
        }
    }

    getCustomerRow = () => {
        return (
            this.state.customers.map((cust, index) => {
                return (
                    <tr key={cust.id}>
                        <td>{cust.id}</td>
                        <td>
                            <img src={cust.photo} alt={cust.name} className="img-fluid w-25" />
                            <div>
                                <button className='btn btn-sm btn-secondary' onClick={() => { this.onChangePictureClick(cust, index); }}>Change Picture</button>
                            </div>
                        </td>
                        <td>{cust.name}</td>
                        <td>{this.getPhoneToRender(cust.phone)}</td>
                        <td>{cust.address.city}</td>
                    </tr>
                );
            })
        )
    }

    onChangePictureClick = (cust, index) => {
        // console.log(cust, index);

        var custArr = this.state.customers;
        custArr[index].photo = 'https://picsum.photos/id/104/60';
        this.setState({
            customers: custArr
        })
    }

}

export default CustomersList;