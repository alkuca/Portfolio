import React, { Component } from 'react';
import './App.css';
import Background from './back2.svg';
class Loader extends Component {
    state=({
       loaded:false
    });

    componentDidMount(){
        this.setState({
            loaded:true
        })
    }


    render() {
        return (
            this.state.loaded ? null :
                <div className="loader">
                    <div className="loader-img-wrapper">
                        <img id="loader-logo" alt="loader" src={Background}/>
                    </div>
                </div>
        );
    }
}

export default Loader;
