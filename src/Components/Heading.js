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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>
        );
    }

    componentDidMount() {
        setInterval(this.changeText,6000);
    }
}

export default Heading;