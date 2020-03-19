import React, { Component } from 'react';
import './Styles/Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div id="Navbar">
                    <div className="Navitem">Image</div>
                    <div className="Navitem">About</div>
                    <div className="Navitem">Products</div>
                    <div className="Navitem">Queries</div>
                    <div className="Navitem">Images</div>
                    <div className="Navitem">Contact</div>
            </div>
        );
    }
}

export default Navbar;