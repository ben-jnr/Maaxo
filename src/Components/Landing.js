import React, { Component } from 'react';
import './Styles/Landing.css';
import Navbar from './Navbar';
import Floating from './Floating';
import Heading from './Heading';
import Brochure from './Brochure';
import LinkText from './LinkText';

class Landing extends Component {
    
    render() {
        return (
            <div id="Landing">
                <Floating />
                <Navbar />
                <Heading />
                <LinkText />
                <Brochure />
            </div>
        );
    }
}

export default Landing;