import React, { Component } from 'react';
import './App.css';
import Fade from 'react-reveal/Fade';

class ContactContent extends Component {

    componentDidMount(){
        this.enterAnimation();
    }

    enterAnimation(){
        setTimeout(function(){
            let content = document.querySelector(".content");
            content.style.opacity="1";
        }, 300);
    }

    render() {
        return (
            <Fade>
            <div id="contact-content" className="content">
                <div className="top-section">
                    <h1>Contact</h1>
                </div>
                <div className="contact-content">
                    <form className="form-wrapper" action="mailto:alkuca@gmail.com" method="post" encType="text/plain">
                        <input className="form name-input" name="name" type="text" placeholder="Your Name" />
                        <input className="form email-input" name="mail" type="text" placeholder="Your Email" />
                        <textarea rows="10" cols="55" className="text-area" name="comment" type="text" placeholder="Your Message"/>
                        <input className="send-button" type="submit" value="Send"/>
                    </form>
                </div>
            </div>
            </Fade>
        );
    }
}

export default ContactContent;
