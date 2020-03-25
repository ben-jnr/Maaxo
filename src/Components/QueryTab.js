import React, { Component } from 'react';
import './Styles/QueryTab.css';
import axios from 'axios';

var no=0;

class QueryTab extends Component {
    
    constructor()
    {
        super();
        this.state = {};
    }


    removeQuery = (id) =>{
        if(window.confirm("Are you sure?"))
        {
            axios.get("http://localhost:9000/admin/query/delete/"+id)
                .then(res => console.log(res))
                .catch(err => console.log(err));
            this.componentDidMount();
        }  
    }


    componentDidMount(){
        const url = "http://localhost:9000/admin/query?no="+no; 
        axios.get(url)
        .then(res => {
            const queries = res.data.map( u =>
                <div  key={u._id} className="QueryContainer">
                    <div className='Query'>
                        <p>Name  :{u.name}</p>
                        <p>Phone :{u.phone}</p>
                        <p>Email :{u.email}</p>
                        <p>Query :{u.query}</p>
                    </div>
                    <div onClick = {this.removeQuery.bind(this, u._id)} className="DeleteQuery">Delete</div>
                </div>
                );
            this.setState({queries});
        })
        .catch(err => console.log(err));
    }


    NextPage = () =>{
            axios.get("http://localhost:9000/admin/query/count")
                .then(res => {
                    if(res.data.count > no+10)
                        no=no+10
                    this.componentDidMount();  
                })
                .catch(err => console.log(err));
    }
    

    PrevPage = () =>{
        if(no>=10)
            no = no-10;
        this.componentDidMount();  
    }


    DeletePage =() =>
    {
        if(window.confirm("Are you sure?"))
        {
           axios.get("http://localhost:9000/admin/query/delete?no="+no)
            .then(res => console.log(res))
            .catch(err => console.log(err));
            if(no === 0)
                window.location.reload();
            if(no>=10)
                no=no-10;     
            this.componentDidMount(); 
        }
    }

    
    
    render() {
        return (
            <div>
                <div id="QueriesList">
                    {this.state.queries}
                </div>
                <div id="QueryBtn">
                    <div><button id="NextBtn" onClick={this.NextPage}>Next Page</button></div>
                    <div><button id="PrevBtn" onClick={this.PrevPage}>Prev Page</button></div>
                    <div id="PageNo">Page : {(no/10)+1}</div>
                    <div><button id="DelPageBtn" onClick={this.DeletePage}>Delete Page</button></div>                     
                </div>
            </div>
        );
    }
}

export default QueryTab;