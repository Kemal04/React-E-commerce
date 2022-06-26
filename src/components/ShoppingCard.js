import React, { Component } from 'react'
import Product from './Product'

class ShoppingCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
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

    componentDidMount = async () => {
        var response = await fetch("http://localhost:5000/products", { method: "GET" });
        console.log(response)
    }   

    componentDidUpdate(prevProps, prevState) {
        console.log("component Did Update", prevProps, prevState, this.props, this.state)

        // if (prevProps.x != this.props.x) {
        //     //make http call
        // }
    }

}
export default ShoppingCard