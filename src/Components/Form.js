import React, { Component } from 'react';
import axios from 'axios';
import './Styles/Form.css';

class Form extends Component {
    constructor(){
        super();
        this.state = {name:"" , phone:"" , email:"" , query:""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
    }

    
    handleSubmit(event) {
        const data={
            name:this.state.name,
            email:this.state.email,
            phone:this.state.phone,
            query:this.state.query
        };

        var config = {
            headers: {'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true}
        };
        
        axios
        .post("http://localhost:9000/add", data, config)
        .then(function(res){alert(res.data)})
        .catch(err => console.log(err))

        this.setState({name:"" , phone:"" , email:"" , query:""});
        event.preventDefault();

    }


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
                        <div className="FormInput"><input name="name" type='text' value={this.state.name} onChange={this.handleChange} /></div>
                    </div>
                    <div className="FormElements">
                        <div className="FormLabel">Phone :</div>
                        <div className="FormInput"><input name="phone" type='tel' value={this.state.phone} onChange={this.handleChange}/></div>
                    </div>
                    <div className="FormElements">
                        <div className="FormLabel">Email :</div>
                        <div className="FormInput"><input name="email" type='email' value={this.state.email} onChange={this.handleChange}/></div>
                    </div>
                    <div className="FormElements">
                        <div className="FormLabel">Query :</div>
                        <div className="FormInput"><textarea name="query" value={this.state.query} onChange={this.handleChange}/></div>
                    </div>
                    <input type='submit' onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

export default Form;