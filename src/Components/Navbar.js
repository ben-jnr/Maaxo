import React, { Component } from 'react';
import './Styles/Navbar.css';
import Logo from './Images/logo.png'

class Navbar extends Component {
    render() {
        return (
            <div id="Navbar">
                    <div id="Logo"><img id="LogoImage" src={Logo}/></div>
                    <div id="NavLinks">
                        <div className="Navitem">About</div>
                        <div className="Navitem">Products</div>
                        <div className="Navitem">Queries</div>
                        <div className="Navitem">Images</div>
                        <div className="Navitem">Contact</div>
                    </div>
            </div>
        );
    }
}

export default Navbar;