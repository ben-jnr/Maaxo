import React, { Component } from 'react';
import './Styles/Navbar.css';
import Logo from './Images/logo.png'

class Navbar extends Component {
    scroll = (name) => {
        var id = "#" + name;
        var element = document.querySelector(id);
        element.scrollIntoView({behavior: "smooth"});
    }
    render() {
        return (
            <div>
            <div>
                <img id="Logo" src={Logo} />
            </div> 
            <div id="Navbar">
                    <div id="NavLinks">
                        <span className="NavItem" onClick={this.scroll.bind(this,"Contact")}>Contact</span>
                        <span className="NavItem" >Images</span>
                        <span className="NavItem" onClick={this.scroll.bind(this,"Form")}>Queries</span>
                        <span className="NavItem" onClick={this.scroll.bind(this,"Products")}>Products</span>
                        <span className="NavItem" onClick={this.scroll.bind(this,"About")}>About</span>
                    </div>
            </div>
            </div>
        );
    }
}

export default Navbar;