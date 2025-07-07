import React from "react";
import "./Stars.scss";
import { ReactTyped  } from "react-typed";

const techStack = [
  {
    name: "React",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Express.js",
    img: "https://cdn.simpleicons.org/express/white",
  },
  {
    name: "JavaScript",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "PostgreSQL",
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
]

class Intro extends React.Component {

  
  render() {
    return (
      <div id="home" className="intro route bg-image background">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />


        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Bikram...</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <ReactTyped
                    strings={[
                      "Full Stack Developer",
                      "Front End Developer",
                      "Software Engineer"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <br/>
                <div className="icons-list flex flex-wrap justify-center gap-6">
                  {techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <img
                        src={tech.img}
                        alt={tech.name}
                        width={35}    
                        className="mb-1"
                      />
                      <p className="text-sm text-white">{tech.name}</p>
                      {/* <span className="text-sm text-white">{tech.name}</span> */}
                    </div>
                  ))}
                </div>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn"
                  href="#projects"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;