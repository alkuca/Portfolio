import React, { Component } from 'react';
import './App.css';



class Slides1 extends Component {

    componentDidMount(){
        this.enterAnimation();

    }

    enterAnimation(){
        let slide1 = document.querySelector(".slide1");
        let slide2 = document.querySelector(".slide2");
        let slide3 = document.querySelector(".slide22");
        setTimeout(function(){
            slide1.style.width="0%";
            slide1.style.transition="0.8s ease"
        }, 500);
        setTimeout(function(){
            slide2.style.width="0%";
            slide2.style.transition="0.8s ease"
        }, 1300);
        setTimeout(function(){
            slide3.style.width="0%";
            slide3.style.transition="1.2s ease"
        }, 2800);
    }



    render() {
        return (
            <div>
                <div className="slide1"/>
                <div className="slide2"/>
                <div className="slide22"/>
            </div>
        );
    }
}

export default Slides1;
