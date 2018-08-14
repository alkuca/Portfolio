import React, { Component } from 'react';
import './App.css';

class Slides4 extends Component {
    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
        let slide1 = document.querySelector(".slide-services1-1");
        let slide2 = document.querySelector(".slide-services1-2");
        setTimeout(function(){
            slide1.style.width="0%";
            slide1.style.transition="0.6s ease"
        }, 900);
        setTimeout(function(){
            slide2.style.width="0%";
            slide2.style.transition="0.6s ease"
        }, 1400);
    }

    render() {
        return (
            <div>
                <div className="slide-services1-1"/>
                <div className="slide-services1-2"/>
            </div>
        );
    }
}

export default Slides4;
