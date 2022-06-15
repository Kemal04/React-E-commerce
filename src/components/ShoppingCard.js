import React, { Component } from 'react'
import Product from './Product'

class ShoppingCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    id: 1,
                    name: "Iphone",
                    price: 1000,
                    quantity: 0,
                },
                {
                    id: 2,
                    name: "Samsung",
                    price: 500,
                    quantity: 0,
                },
                {
                    id: 3,
                    name: "Xiaomi",
                    price: 300,
                    quantity: 0,
                },
                {
                    id: 4,
                    name: "Ipad Pro",
                    price: 1500,
                    quantity: 0,
                },
                {
                    id: 5,
                    name: "Xbox",
                    price: 2795,
                    quantity: 0,
                },
                {
                    id: 6,
                    name: "Playstation 5",
                    price: 4560,
                    quantity: 0,
                },
            ],
        };
    }

    render() {
        return (
            <div className='container'>
                <h4 className='mt-5 text-center'>Shopping Card</h4>
                <div className='row mt-5'>
                    {
                        this.state.products.map((prod) => {
                            return (
                                <Product key={prod.id} product={prod} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}>
                                    <button className='btn btn-primary'>Buy Now</button>
                                </Product>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    handleIncrement = (product, maxValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (allProducts[index].quantity < maxValue) {
            allProducts[index].quantity++;

            this.setState({ products: allProducts });
        }
    }

    handleDecrement = (product, minValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (allProducts[index].quantity > minValue) {
            allProducts[index].quantity--;

            this.setState({ products: allProducts });
        }
    }

    handleDelete = (product) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if (window.confirm("Pozmak isleyanizmi")) {
            allProducts.splice(index, 1);

            this.setState({ products: allProducts });
        }
    }

    componentDidMount() {
        console.log("component Did Mount")
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("component Did Update", prevProps, prevState, this.props, this.state)

        // if (prevProps.x != this.props.x) {
        //     //make http call
        // }
    }

}
export default ShoppingCard