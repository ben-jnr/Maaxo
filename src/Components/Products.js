import React, { Component } from 'react';
import './Styles/Products.css'

class Products extends Component {
    render() {
        return (
            <div id="Products">
                <h1 id="ProductsHeading">Products</h1>
                <div id="ProductImages">
                    <div id="ClickNotice">Click on a product to read more!</div>
                    <div className="ProductImage" id="ProductImage1"><div>Septic Tanks</div></div>
                    <div className="ProductImage" id="ProductImage2"><div>Windows</div></div>
                    <div className="ProductImage" id="ProductImage3"><div>Tiles</div></div>
                </div>
            </div>
        );
    }
}

export default Products;