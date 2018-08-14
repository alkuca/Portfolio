import React, { Component } from 'react';
import './App.css';
import NavigationItem from "./NavigationItem";

class NavigationBar extends Component {
    render() {
        return (
            <div className="navigation">
                <NavigationItem/>
            </div>
        );
    }
}

export default NavigationBar;
