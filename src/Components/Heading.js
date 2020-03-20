import React, { Component } from 'react';
import './Styles/Heading.css'

class Heading extends Component {
    constructor() {
        super();
        this.changingText=['Serving People since 1995','Excellence Guaranteed',
                    'ISO Certified','Wide range of Products','Modern Machinaries are employed'];
        this.state = {index:0};
    }

    changeText = () => {
        if(this.state.index === 4)
        this.setState({index : 0});
        else
            this.setState({index : this.state.index+1});
    }
    
    render() {
        return (
            <div id="Heading">
                <div class="HeadingDiv"><h1 id="HeadingText1">MAAXO</h1>
                        <h1 id="HeadingText2">INDUSTRIES</h1></div>
                <div id="ChangingText"><em>{this.changingText[this.state.index]}</em></div>
                <div id="MainText">
                    Maaxo Industries has been a household name since 1995.
                    For years, we here at maaxo have been constantly showing our quality through our 
                    products. Products ranging from ready made septic tanks, paver tiles to even 
                    concrete windows are manufactured. Use of modern technologies have been 
                    employed making sure our products last over generations. Hope you have a good
                    time shopping with us . . . 
                </div>
            </div>
        );
    }

    componentDidMount() {
        setInterval(this.changeText,6000);
    }
}

export default Heading;