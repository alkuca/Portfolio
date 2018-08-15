import React, { Component } from 'react';
import './App.css';
import Sidebar from "./SIdebar";
import {Route} from "react-router-dom"
import ServicesContent from "./ServicesContent";
import ProjectsContent from "./ProjectsContent";
import ContactContent from "./ContactContent";
import SkillsContent from "./SkillsContent"
import HomeContent from "./HomeContent";
import Loader from "./Loader";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Sidebar/>

              <Route exact path="/" component={HomeContent}/>

            <Route path="/loader" component={Loader}/>

              <Route path="/services" component={ServicesContent} />

              <Route path="/projects" component={ProjectsContent}/>

              <Route path="/skills" component={SkillsContent}/>

              <Route path="/contact" component={ContactContent}/>
        </div>
    );
  }
}

export default App;
