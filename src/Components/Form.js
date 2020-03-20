import React, { Component } from 'react';
import './Styles/Form.css';

class Form extends Component {
    render() {
        return (
            <div id="Form">
                <div id="FormHeading">
                    <h1>Query Form</h1>
                </div>
                <div id="FormText">
                    Have any Questions?  Feel free to communicate.  
                    We will get back to you within 24 hours.
                </div>
                <form id="FormContainer">
                    <div className="FormElements">
                        <div className="FormLabel">Name :</div>
                        <div className="FormInput"><input name="name" type='text' /></div>
                    </div>
                    <div className="FormElements">
                        <div className="FormLabel">Phone :</div>
                        <div className="FormInput"><input name="phone" type='tel' /></div>
                    </div>
                    <div className="FormElements">
                        <div className="FormLabel">Email :</div>
                        <div className="FormInput"><input name="email" type='email' /></div>
                    </div>
                    <div className="FormElements">
                        <div className="FormLabel">Query :</div>
                        <div className="FormInput"><textarea name="query" /></div>
                    </div>
                    <input type='submit' />
                </form>
            </div>
        );
    }
}

export default Form;