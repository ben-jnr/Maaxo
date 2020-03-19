import React, { Component } from 'react';
import './Styles/Brochure.css';

class Brochure extends Component {
    render() {
        return (
            <div id="Brochure">
                <div id="BrochureLink">
                    <div><a><button>Download Brochure</button></a></div>
                </div> 
                <div id="ImagesLink">
                    <div><a><button>More Images</button></a></div>
                </div>
            </div>
        );
    }
}

export default Brochure;