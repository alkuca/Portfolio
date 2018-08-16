import React, { Component } from 'react';
import './App.css';
import Background from './back2.svg';
class Loader extends Component {


    render() {
        return (
            <div className="loader">
                <div className="loader-img-wrapper">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 1366 768"  xmlSpace="preserve">
                    <title>Loader</title>
                    <path id="pathRight" className="st0" d="M935.5,399.9L754.7,234.5l-76.1,83.2l101.7,89l-90.7,99.1l4.3,157.9L935.5,399.9z M805,429.4l23.1-25.2
                        l-25.7-22.5l-76-66.5l30.5-33.3L888.3,402L725.2,580.3l-1.6-61.9L805,429.4z"/>
                    <path id="pathLeft" className="st0" d="M756,407.7l-101.7-89.1l90.7-99.1l-4.3-157.9L499.1,325.5l180.8,165.4L756,407.7z M709.4,145.1l1.8,61.9
                        L629.6,296l-23.1,25.2l25.8,22.5l76,66.5l-30.5,33.3L546.4,323.4L709.4,145.1z"/>
                    </svg>
                </div>
            </div>
        );
    }
}

export default Loader;
