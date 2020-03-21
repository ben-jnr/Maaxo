import React, { Component } from 'react';
import './Styles/Contact.css';
import fblogo from './Images/fb.png'

class Contact extends Component {
    render() {
        return (
            <div id="Contact">
                <iframe id="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.7484468643693!2d76.5713774497433!3d9.530570783523485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ffb8a39c487%3A0x91b03bdb6795f139!2sMaaxo%20Industries!5e0!3m2!1sen!2sin!4v1584740254381!5m2!1sen!2sin" frameBorder="0"  allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                <div id="ContactContainer">
                    <h1 id="ContactHeader">Contact</h1>
                    <div>Alex Arnold</div>
                    <div>alexarnold@gmail.com</div>
                    <div>8943656990</div>
                    <a id="fb" href="https://www.facebook.com/maaxoindustries/"><img id="fbimg" src={fblogo} /></a>
                </div> 
            </div>
        );
    }
}

export default Contact;