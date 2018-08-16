import React, { Component } from 'react';
import './App.css';
import pic9 from './faceFront.png';
import picFront from './faceBack.png';
import Slides1 from "./Slides1";
import Slides2 from "./Slides2";
import Parallax from 'parallax-js'
import Loader from "./Loader";

class HomeContent extends Component {
    state=({
     notLoaded: true
    });

    componentDidMount(){
        setTimeout(function(){
            this.loadParallax();
            this.setState({
                notLoaded:false
            })
        }.bind(this), 3100);

    }



    redirectToServices = () => {
        this.props.history.push("/services");
    };

    loadParallax(){
        setTimeout(function () {
            var imgContainer = document.getElementById('img-container');
            var h1Parallax = document.getElementById('h1-parallax');
            var pParallax = document.getElementById('p-parallax');
            var button = document.getElementById('button');
            new Parallax(imgContainer);
            new Parallax(h1Parallax);
            new Parallax(pParallax);
            new Parallax(button);
        },1);
    }


    render() {
        return (
            this.state.notLoaded ? <Loader/> :
            <div id="home-container" className="content">
                <div className="home-content">
                    <div className="home-top-content">
                        <Slides1/>
                        <div id="h1-parallax">
                            <h1 data-depth="0.2" >Hello, my name is Alen. I am a Designer / Front End Developer living in Pula, Croatia</h1>
                        </div>
                        <div className="text" id="p-parallax">
                            <p data-depth="0.2">Hello, my name is Alen. I am a Designer / Front End Developer living in Pula</p>
                        </div>
                        <div id="button">
                            <div data-depth="0.2" className="button" onClick={this.redirectToServices}>
                                <span id="button-arrow">⮜</span>
                                <a>SERVICES</a>
                                <div className="mask"/>
                            </div>
                        </div>
                    </div>
                    <div className="face-picture-container">
                        <Slides2/>
                        <div id="img-container">
                            <img alt="picFront" id="picFront" data-depth="0.1" src={picFront}/>
                            <img alt="picBack" id="picBack" data-depth="0.1" src={pic9}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeContent;
