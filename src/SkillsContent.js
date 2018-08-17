import React, { Component } from 'react';
import './App.css';
import Certificate from "./Certificate";


class SkillsContent extends Component {

    state=({
        certificateVisible: false
    });

    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
        let content = document.querySelector(".content");
        let amount1 = document.querySelector(".amount1");
        let amount2 = document.querySelector(".amount2");
        let amount3 = document.querySelector(".amount3");
        let amount4 = document.querySelector(".amount4");
        let amount5 = document.querySelector(".amount5");

        let html = document.querySelector(".html");
        let css = document.querySelector(".css");
        let js = document.querySelector(".js");
        let ill = document.querySelector(".ill");
        let ps = document.querySelector(".ps");
        let certificateOpener = document.querySelector(".certificate-opener");

        content.style.opacity="1";

        setTimeout(function(){
            amount1.style.width="90%";
            html.style.opacity="1";
        }, 1);
        setTimeout(function(){
            amount2.style.width="80%";
            css.style.opacity="1";
        }, 200);
        setTimeout(function(){
            amount3.style.width="75%";
            js.style.opacity="1";
        }, 400);
        setTimeout(function(){
            amount4.style.width="80%";
            ill.style.opacity="1";
        }, 600);
        setTimeout(function(){
            amount5.style.width="50%";
            ps.style.opacity="1";
        }, 800);
        setTimeout(function(){
            certificateOpener.style.opacity="1";
        }, 1500);
    }


    showCertificate(){
        this.setState({
            certificateVisible: true
        })
    }

    hideCertificate(){
        this.setState({
            certificateVisible: false
        })
    }

    render() {
        return (
            <div id="skills-container" className="content">
                <div className="skills-content">
                    <div className="skills">
                        <div className="skill">
                            <h2 className="html">HTML</h2>
                            <div className="amount amount1">
                                <p>90%</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h2 className="css">CSS</h2>
                            <div className="amount amount2">
                                <p>80%</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h2 className="js">JavaScript</h2>
                            <div className="amount amount3">
                                <p>75%</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h2 className="ill">Illustrator</h2>
                            <div className="amount amount4">
                                <p>80%</p>
                            </div>
                        </div>
                        <div className="skill">
                            <h2 className="ps">Photoshop</h2>
                            <div className="amount amount5">
                                <p>50%</p>
                            </div>
                        </div>
                        <div className="certificate-opener" onClick={this.showCertificate.bind(this)}>
                            <p>Show Udacity Certificate<span> ➤</span></p>
                        </div>
                    </div>
                </div>
                {this.state.certificateVisible ? <Certificate hideCertificate={this.hideCertificate.bind(this)}/> : null}
            </div>
        );
    }
}

export default SkillsContent;
