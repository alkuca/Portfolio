import React, { Component } from 'react';
import './App.css';
import Background from './back2.svg';
class Loader extends Component {


    render() {
        return (
                <div className="loader">
                    <div className="loader-img-wrapper">
                        <img alt="loader" src={Background}/>
                    </div>
                </div>
        );
    }
}

export default Loader;
