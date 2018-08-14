import React, { Component } from 'react';
import './App.css';

class Slides2 extends Component {
    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
        let slide1 = document.querySelector(".slide3");
        let slide2 = document.querySelector(".slide4");
        setTimeout(function(){
            slide1.style.width="0%";
            slide1.style.transition="0.8s ease";
            slide1.style.opacity="1";
        }, 2300);
        setTimeout(function(){
            slide2.style.width="0%";
            slide2.style.transition="0.8s ease"
        }, 3100);
    }

    render() {
        return (
            <div>
                <div className="slide3"/>
                <div className="slide4"/>
            </div>
        );
    }
}

export default Slides2;
