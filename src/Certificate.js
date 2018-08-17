import React, { Component } from 'react';
import './App.css';
import certificate from './certificate.PNG';
import remove from './remove-icon.svg';

class Certificate extends Component {

    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
        let certificate = document.querySelector(".certificate");
        let removeIcon = document.querySelector("#remove-icon");
        setTimeout(function(){
            certificate.style.transform="scale(1)";
            certificate.style.opacity="1";
        }, 1);
        setTimeout(function(){
            certificate.style.backgroundColor="#202020";
        }, 600);
        setTimeout(function(){
            removeIcon.style.opacity="1";
        }, 1200);
    }


    render() {
        return (
            <div className="certificate">
                <img alt="Certificate" id="certificate-img"  src={certificate}/>
                <img id="remove-icon" src={remove} onClick={this.props.hideCertificate}/>
            </div>

        );
    }
}

export default Certificate;
