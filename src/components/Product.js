import React, { Component } from 'react'

class Product extends Component {

    state = {
        product: this.props.product
    }

    render() {
        return (
            <div className='col-lg-4 col-4 mb-3'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='text-muted'>
                            #{this.state.product.id}
                            <span className='pull-right' style={{ cursor: "pointer" }} onClick={() => { this.props.onDelete(this.state.product) }}>
                                <i className='fa fa-times'></i>
                            </span>
                        </div>
                        <div className='card-title h4'>{this.state.product.name}</div>
                        <div className='card-text text-danger'>$ {this.state.product.price}</div>
                    </div>
                    <div className='card-footer'>
                        <div className='float-start'>
                            <span className='badge bg-dark me-3'>{this.state.product.quantity}</span>
                            <div className='btn-group'>
                                <button className='btn btn-outline-success' onClick={() => { this.props.onIncrement(this.state.product, 10) }}>+</button>
                                <button className='btn btn-outline-success' onClick={() => { this.props.onDecrement(this.state.product, 0) }}>-</button>
                            </div>
                        </div>
                        <div className='float-end'>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product