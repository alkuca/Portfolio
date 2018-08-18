import React, { Component } from 'react';
import './App.css';


class SocialMedia extends Component {

    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
        let github = document.querySelector("#github");
        let facebook = document.querySelector("#facebook");
        let instagram = document.querySelector("#instagram");

        setTimeout(function(){
            github.style.opacity="1";
        }, 3400);
        setTimeout(function(){
            facebook.style.opacity="1";
        }, 3550);
        setTimeout(function(){
            instagram.style.opacity="1";
        }, 3700);
    }


    render() {
        return (
            <div className="social-media-wrapper">
                <p className="media-nav" id="github">Github</p>
                <p className="media-nav" id="facebook">Facebook</p>
                <p className="media-nav" id="instagram">Instagram</p>
            </div>
        );
    }
}

export default SocialMedia;
