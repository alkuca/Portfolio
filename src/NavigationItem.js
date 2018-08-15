import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom"
import Marker from "./Marker";
import Marker2 from "./Marker2";
class NavigationItem extends Component {


    handleMarkerFade(e){

    }

    render() {
        return (
            <div className="navigation-items">
                <Link to="/services">
                    <div className="navigation-item item1" onClick={((e) => this.handleMarkerFade(e))}>
                        {window.location.hash === "#/services" ? <Marker2/> : <Marker/>}
                        <p className="item-text">SERVICES</p>
                    </div>
                </Link>
                <Link to="/projects">
                    <div className="navigation-item item2" onClick={((e) => this.handleMarkerFade(e))}>
                        {window.location.hash === "#/projects" ? <Marker2/> : <Marker/>}
                        <p className="item-text">PROJECTS</p>
                    </div>
                </Link>
                <Link to="/skills">
                    <div className="navigation-item item3" onClick={((e) => this.handleMarkerFade(e))}>
                        {window.location.hash === "#/skills" ? <Marker2/> : <Marker/>}
                        <p className="item-text">SKILLS</p>
                    </div>
                </Link>
                <Link to="/contact">
                    <div className="navigation-item item4" onClick={((e) => this.handleMarkerFade(e))}>
                        {window.location.hash === "#/contact" ? <Marker2/> : <Marker/>}
                        <p className="item-text">CONTACT</p>
                    </div>
                </Link>
            </div>
        );
    }
}

export default NavigationItem;
