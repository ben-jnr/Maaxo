import React, { Component } from 'react';
import './Styles/LinkText.css'

class LinkText extends Component {
    render() {
        return (
            <div id="LinkText">
                <div id="BrochureText">
                    <p>Want to know more ?</p>
                    <p>Download our Brochure</p>
                </div>
                <div id="ImagesText">
                    <p>Have a look into more</p>
                    <p>of our activites</p>
                </div>
            </div>
        );
    }
}

export default LinkText;