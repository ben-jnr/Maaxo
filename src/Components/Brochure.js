import React, { Component } from 'react';
import './Styles/Brochure.css';
import pdf from './brochure.pdf';

class Brochure extends Component {
        render() {
        return (
            <div id="Brochure">
                <div id="BrochureLink">
                    <div><a href={pdf} download><button>Download</button></a></div>
                </div> 
                <div id="ImagesLink">
                    <div><a href="/"><button>More Images</button></a></div>
                </div>
            </div>
        );
    }
}

export default Brochure;