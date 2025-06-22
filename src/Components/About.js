import React from "react";
import image from "../assets/images/bikram2.jpg";

const About = () => {
  function calculateYearsFromDate(startDate) {
    const today = new Date();
    const start = new Date(startDate);

    let years = today.getFullYear() - start.getFullYear();
    let months = today.getMonth() - start.getMonth();

    // Adjust the year and month difference if months are negative
    if (months < 0) {
      years--;
      months += 12;
    }

    // Calculate the total number of months
    const totalMonths = years * 12 + months;

    // Calculate the number of years rounded to the nearest 0.5
    const roundedYears = Math.round(totalMonths / 6) / 2;

    return roundedYears;
  }
  const yearsSinceNovember2021 = calculateYearsFromDate("2021-02-01");

  return (
    <div id="aboutMe" style={{ marginTop: "100px" }}>
      <div className="container">
        <div className="row box-shadow-full" style={{ marginTop: "20px" }}>
          <div className="col-md-6">
            <div className="row">
              <div className="col-sm-6 col-md-5">
                <div className="about-img">
                  <img
                    src={image}
                    className="img-fluid rounded b-shadow-a"
                    alt="Bikramjit Singh's image"
                  />
                </div>
              </div>
              <div className="col-sm-6 col-md-7">
                <div className="about-info">
                  <p>
                    <span className="title-s">Name: </span>{" "}
                    <span>Bikramjit Singh Khokhar</span>
                  </p>
                  <p>
                    <span className="title-s">Profile: </span>{" "}
                    <span>Software developer</span>
                  </p>
                  <p>
                    <span className="title-s">Email: </span>{" "}
                    <span>bikramjit7777@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="skill-mf">
              <h3 style={{ marginTop: "20px" }}>Skills</h3>
              <span>ReactJS</span> <span className="pull-right">95%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "95%",
                    ariaValuenow: "95",
                    ariaValuemin: "0",
                    ariaValuemax: "100",
                  }}
                ></div>
              </div>
              <span>NodeJS</span> <span className="pull-right">90%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "90%",
                    ariaValuenow: "90",
                    ariaValuemin: "0",
                    ariaValuemax: "100",
                  }}
                ></div>
              </div>
              <span>PostgreSQL</span> <span className="pull-right">90%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "90%",
                    ariaValuenow: "90",
                    ariaValuemin: "0",
                    ariaValuemax: "100",
                  }}
                ></div>
              </div>
              <span>JavaScript/TypeScript</span>{" "}
              <span className="pull-right">92%</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: "92%",
                    ariaValuenow: "92",
                    ariaValuemin: "0",
                    ariaValuemax: "100",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-me pt-4 pt-md-0">
              <div className="title-box-2">
                <h5 className="title-left">ABOUT ME</h5>
              </div>
              <p className="lead">
                I have <b>{yearsSinceNovember2021}+ years</b> of professional
                experience as a <b>Software Developer</b>, specializing in{" "}
                <b>ReactJS, NodeJS, JavaScript, TypeScript,</b>and{" "}
                <b>PostgreSQL.</b>
                Throughout my career, I have utilized various tools and
                technologies, including{" "}
                <b>
                  Git, Jira, React-Redux, Redux-Saga, Postman, DBeaver, VS Code,
                  GitHub, CircleCI,
                </b>{" "}
                and <b>DataDog,</b> to enhance development processes and ensure
                high-quality software delivery.
              </p>
              <p className="lead">
                I have completed a <b>Post-Graduation Diploma</b> in{" "}
                <b>Web Design and Development</b> from Conestoga College,
                Kitchener, Canada. Prior to this, I earned a{" "}
                <b>Bachelor's degree</b> in{" "}
                <b>Computer Science & Engineering</b>
                in 2019. Throughout my academic journey and professional career,
                I have immersed myself in various trending web technologies,
                gaining valuable hands-on experience and expanding my expertise
                in the field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
