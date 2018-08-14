import React, { Component } from 'react';
import './App.css';
import NavigationBar from "./NavigationBar";
import {Link} from "react-router-dom";

class Sidebar extends Component {
    componentDidMount(){

    }

    enterAnimation(){
        setTimeout(function(){
            let sidebar = document.querySelector(".sidebar");
            sidebar.style.opacity="1";
            sidebar.style.width="55px";
            }, 400);
    }

    render() {
        return (

            <div className="sidebar">
                <div  className="logo-container"><Link to="/">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 71.754 51.771">
                        <g id="Group_1" data-name="Group 1" transform="translate(-21.629 -24.036)">
                            <g id="Path_3" data-name="Path 3" className="inner-fill"
                               transform="translate(93.383 54.308) rotate(180)">
                                <path className="cls-2" d="M51,9.543,30.272,30.272,0,0,18.9.32,30.272,11.688,41.459,0Z"/>
                                <path className="stroke"
                                      d="M 9.823745727539063 4.166885375976563 L 30.27231597900391 24.61545753479004 L 45.34486770629883 9.542898178100586 L 41.52145767211914 5.719490051269531 L 33.16200637817383 14.45338821411133 L 30.3349552154541 17.40707778930664 L 27.44388580322266 14.51601791381836 L 17.21997833251953 4.29210090637207 L 9.823745727539063 4.166885375976563 M -3.814697265625e-06 -1.9073486328125e-06 L 18.90478515625 0.3200473785400391 L 30.27231597900391 11.68758773803711 L 41.45882415771484 -1.9073486328125e-06 L 51.00172424316406 9.542898178100586 L 30.27231597900391 30.27231788635254 L -3.814697265625e-06 -1.9073486328125e-06 Z"/>
                            </g>
                            <g id="Path_4" data-name="Path 4" className="inner-fill" transform="translate(21.629 45.535)">
                                <path className="cls-2" d="M51,9.543,30.272,30.272,0,0,18.9.32,30.272,11.688,41.459,0Z"/>
                                <path className="stroke"
                                      d="M 9.823745727539063 4.166885375976563 L 30.27231597900391 24.61545753479004 L 45.34486770629883 9.542898178100586 L 41.52145767211914 5.719490051269531 L 33.16200637817383 14.45338821411133 L 30.3349552154541 17.40707778930664 L 27.44388580322266 14.51601791381836 L 17.21997833251953 4.29210090637207 L 9.823745727539063 4.166885375976563 M -3.814697265625e-06 -1.9073486328125e-06 L 18.90478515625 0.3200473785400391 L 30.27231597900391 11.68758773803711 L 41.45882415771484 -1.9073486328125e-06 L 51.00172424316406 9.542898178100586 L 30.27231597900391 30.27231788635254 L -3.814697265625e-06 -1.9073486328125e-06 Z"/>
                            </g>
                        </g>
                        </svg></Link>
                </div>
                <NavigationBar/>
            </div>

        );
    }
}

export default Sidebar;
