import React, { Component } from 'react';
import './App.css';

class Slides5 extends Component {
    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
        let slide3 = document.querySelector(".slide-services-3");
        let slide4 = document.querySelector(".slide-services-4");

        setTimeout(function(){
            slide3.style.width="0%";
            slide3.style.transition="0.6s ease"
        }, 1700);
        setTimeout(function(){
            slide4.style.width="0%";
            slide4.style.transition="0.6s ease"
        }, 2300);
    }

    render() {
        return (
            <div>
                <div className="slide-services-3"/>
                <div className="slide-services-4"/>
            </div>
        );
    }
}

export default Slides5;
