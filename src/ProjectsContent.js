import React, { Component } from 'react';
import './App.css';
import mapPic from './map.png';
import calmPic from "./calm.png"
import readerPic from "./reader.png"
import almenyPic from "./almenyload.png"
import arcadePic from "./arcade.png"
import memoryPic from "./memory.png"
import myreadsPic from "./myreads.png"
import Slides3 from "./Slides3";
import Tilt from 'react-tilt'
import Fade from 'react-reveal/Fade';
import Slides5 from "./Slides5";
class ProjectsContent extends Component {

    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
            let content = document.querySelector(".content-projects-wrapper");
            content.style.opacity="1";
    }

    render() {
        return (
            <div className="content-projects-wrapper">
                <div className="projects">
                    <div className="project">
                        <Fade>
                        <Tilt className="Tilt" options={{ max : 8, scale:1, }} >
                            <div id="first-kocka" className="kocka">
                                <Slides3/>
                                <img alt="project1" className="project-card-img" src={calmPic}/>
                                <h1 className="project-card-h1">Neighborhood Map</h1>
                                <div className="live-site">
                                    <p>Live Site <span>➤</span></p>
                                </div>
                            </div>
                        </Tilt>
                        </Fade>
                        <Fade bottom>
                        <Tilt className="Tilt" options={{ max : 8, scale:1, }} >
                            <div className="kocka">
                                <Slides5/>
                                <img alt="project2" className="project-card-img" src={myreadsPic}/>
                                <h1 className="project-card-h1">Neighborhood Map</h1>
                                <div className="live-site">
                                    <p>Live Site <span>➤</span></p>
                                </div>
                            </div>
                        </Tilt>
                        </Fade>
                        <Fade bottom>
                        <Tilt className="Tilt" options={{ max : 8, scale:1, }} >
                            <div className="kocka">
                                <img alt="project3" className="project-card-img" src={mapPic}/>
                                <h1 className="project-card-h1">Neighborhood Map</h1>
                                <div className="live-site">
                                    <p>Live Site <span>➤</span></p>
                                </div>
                            </div>
                        </Tilt>
                        </Fade>
                        <Fade bottom>
                        <Tilt className="Tilt" options={{ max : 8, scale:1, }} >
                            <div className="kocka">
                                <img alt="project4" className="project-card-img" src={readerPic}/>
                                <h1 className="project-card-h1">Neighborhood Map</h1>
                                <div className="live-site">
                                    <p>Live Site <span>➤</span></p>
                                </div>
                            </div>
                        </Tilt>
                        </Fade>
                        <Fade bottom>
                        <Tilt className="Tilt" options={{ max : 8, scale:1, }} >
                            <div className="kocka">
                                <img alt="project5" className="project-card-img" src={almenyPic}/>
                                <h1 className="project-card-h1">Neighborhood Map</h1>
                                <div className="live-site">
                                    <p>Live Site <span>➤</span></p>
                                </div>
                            </div>
                        </Tilt>
                        </Fade>
                        <Fade bottom>
                        <Tilt className="Tilt" options={{ max : 8, scale:1, }} >
                            <div className="kocka">
                                <img alt="project6" className="project-card-img" src={memoryPic}/>
                                <h1 className="project-card-h1">Neighborhood Map</h1>
                                <div className="live-site">
                                    <p>Live Site <span>➤</span></p>
                                </div>
                            </div>
                        </Tilt>
                        </Fade>
                        <Fade bottom>
                        <Tilt className="Tilt" options={{ max : 8, scale:1, }} >
                            <div className="kocka">
                                <img alt="project7" className="project-card-img" src={arcadePic}/>
                                <h1 className="project-card-h1">Neighborhood Map</h1>
                                <div className="live-site">
                                    <p>Live Site <span>➤</span></p>
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

export default ProjectsContent;
