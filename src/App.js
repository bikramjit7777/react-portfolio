import logo from "./logo.svg";
import React, { Fragment } from "react";
import "./App.css";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
// import Projects from "./Components/Projects";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WorkExperience from "./Components/WorkExperience";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <Fragment>
                <Intro/>
                <About />
                <WorkExperience />
                <Projects />
                <Contact />
              </Fragment>
            }
            // render={() => (
            //   <Fragment>
            //     {/* <MainContent /> */}
            //     <About />
            //     <WorkExperience />
            //     <Projects />
            //     <Contact />
            //   </Fragment>
            // )}
          />
        
          <Route exact path="/about" element={<About />} />
          <Route exact path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
