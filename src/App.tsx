import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Skills from "./Components/Skills/MySkills";
import {Projects} from "./Components/Projects/Projects";
import {Contacts} from "./Components/Contacts/Contacts";
import {Footer} from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
    </div>
  );
}

export default App;
