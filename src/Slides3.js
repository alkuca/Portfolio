import React, { Component } from 'react';
import './App.css';

class Slides3 extends Component {
    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
        let slide2 = document.querySelector(".slide-services-2");
        let slide1 = document.querySelector(".slide-services-1");
        setTimeout(function(){
            slide1.style.width="0%";
            slide1.style.transition="0.6s ease"
        }, 500);
        setTimeout(function(){
            slide2.style.width="0%";
            slide2.style.transition="0.6s ease"
        }, 1100);
    }

    render() {
        return (
            <div>
                <div className="slide-services-1"/>
                <div className="slide-services-2"/>
            </div>
        );
    }
}

export default Slides3;
