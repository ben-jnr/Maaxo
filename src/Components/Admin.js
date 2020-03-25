import React, { Component } from 'react';
import QueryTab from './QueryTab';
import './Styles/Admin.css';

class Admin extends Component {
   

    render(arr) {
        return (
            <div id="Admin">
                <div  id="AdminNavbar"> 
                    <h1  id="AdminHeading">Admin Panel</h1>
                </div>
                <div id="TabBar">
                    <div className="Tab active" id="QueriesTab">
                        User Queries
                    </div>
                    <div className="Tab" id="GalleryTab">
                        Image Gallery
                    </div>
                    <div className="Tab" id="GalleryTab">
                        Add User
                    </div>
                    <div className="Tab" id="GalleryTab">
                        Change Password
                    </div>
                </div>
                <div id="TabWindows">
                    <QueryTab />
                </div>        
            </div>
        );
    }
}

export default Admin;