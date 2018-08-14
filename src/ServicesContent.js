import React, { Component } from 'react';
import './App.css';
import Slides3 from "./Slides3";
import Slides4 from "./Slides4";
import Tilt from 'react-tilt'
import Fade from 'react-reveal/Fade';
class ServicesContent extends Component {

    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
            let content = document.querySelector(".content-services-wrapper");
            content.style.opacity="1";
    }



    render() {
        return (
            <div className="content-services-wrapper">
                <div className="services">
                    <div className="service">
                        <Fade>
                            <Tilt className="Tilt" options={{ max : 8, scale:1, }} >
                        <div id="first-pravokutnik" className="pravokutnik">
                            <Slides3/>
                            <div className="card-top">
                                <h1 className="card-h1">WEB DESIGN</h1>
                                <div className="line"/>
                            </div>
                            <div className="card-side">
                                <p>Modern web technologies-</p>
                                <p>Designing web pages-</p>
                                <p>Beautiful user interfaces with modern-</p>
                                <p>Modern web technologies-</p>
                            </div>
                            <div id="card-button">
                                <div className="button">
                                    <span id="button-arrow">⮜</span>
                                    <a>LEARN MORE</a>
                                    <div className="mask"/>
                                </div>
                            </div>
                        </div>
                            </Tilt>
                        </Fade>
                        <Fade>
                            <Tilt className="Tilt" options={{ max : 10, scale:1, }} >
                        <div className="pravokutnik">
                            <Slides4/>
                            <div className="card-top">
                                <h1 className="card-h1">UI/UX</h1>
                                <div className="line"/>
                            </div>
                            <div className="card-side">
                                <p>Modern web technologies-</p>
                                <p>Designing web pages-</p>
                                <p>Beautiful user interfaces with modern-</p>
                                <p>Modern web technologies-</p>
                            </div>
                            <div id="card-button">
                                <div className="button">
                                    <span id="button-arrow">⮜</span>
                                    <a>LEARN MORE</a>
                                    <div className="mask"/>
                                </div>
                            </div>
                        </div>
                            </Tilt>
                        </Fade>
                        <Fade bottom>
                            <Tilt className="Tilt" options={{ max :10, scale:1, }} >
                        <div className="pravokutnik">
                            <div className="card-top">
                                <h1 className="card-h1">WEB DESIGN</h1>
                                <div className="line"/>
                            </div>
                            <div className="card-side">
                                <p>Modern web technologies-</p>
                                <p>Designing web pages-</p>
                                <p>Beautiful user interfaces with modern-</p>
                                <p>Modern web technologies-</p>
                            </div>
                            <div id="card-button">
                                <div className="button">
                                    <span id="button-arrow">⮜</span>
                                    <a>LEARN MORE</a>
                                    <div className="mask"/>
                                </div>
                            </div>
                        </div>
                            </Tilt>
                        </Fade>
                        <Fade bottom>
                            <Tilt className="Tilt" options={{ max : 10, scale:1, }} >
                        <div className="pravokutnik">
                            <div className="card-top">
                                <h1 className="card-h1">WEB DESIGN</h1>
                                <div className="line"/>
                            </div>
                            <div className="card-side">
                                <p>Modern web technologies-</p>
                                <p>Designing web pages-</p>
                                <p>Beautiful user interfaces with modern-</p>
                                <p>Modern web technologies-</p>
                            </div>
                            <div id="card-button">
                                <div className="button">
                                    <span id="button-arrow">⮜</span>
                                    <a>LEARN MORE</a>
                                    <div className="mask"/>
                                </div>
                            </div>
                        </div>
                            </Tilt>
                        </Fade>
                        <Fade bottom>
                            <Tilt className="Tilt" options={{ max : 10, scale:1, }} >
                        <div className="pravokutnik">
                            <div className="card-top">
                                <h1 className="card-h1">WEB DESIGN</h1>
                                <div className="line"/>
                            </div>
                            <div className="card-side">
                                <p>Modern web technologies-</p>
                                <p>Designing web pages-</p>
                                <p>Beautiful user interfaces with modern-</p>
                                <p>Modern web technologies-</p>
                            </div>
                            <div id="card-button">
                                <div className="button">
                                    <span id="button-arrow">⮜</span>
                                    <a>LEARN MORE</a>
                                    <div className="mask"/>
                                </div>
                            </div>
                        </div>
                            </Tilt>
                        </Fade>
                    </div>
                </div>
            </div>
        );
    }
}

export default ServicesContent;
