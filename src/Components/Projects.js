import React from "react";
import { Icon, IconifyIcon } from "@iconify/react";
import weather from "@iconify/icons-bi/cloud-rain";
import cart from "@iconify/icons-bi/cart";
import shopping from "@iconify/icons-bi/shop";
import bakery from "@iconify/icons-bi/shop-window";
import recipe from "@iconify/icons-bi/receipt";
import fitness from "@iconify/icons-bi/gear";
import github from "@iconify/icons-bi/github";

const Projects = () => {
  return (
    <div id="projects">
      <section id="services" className="services-mf pt-5 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h3 className="title-a">Projects</h3>
                <p className="subtitle-a">Academic and personal projects</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>
          <div className="row">

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <Icon icon={github} />
                    <i className="bi bi-bar-chart"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">My Projects on Github</h2>
                  <h3 className="ss-title">Personal projects</h3>
                  <p className="s-description text-center">
                    Checkout my more Projects on Github utilizing AI models, Langchain, LangGraph, Multi-Agents, Vector databases, RAG, Python, and NextJS. 
                  </p>
                  <strong>
                    <a
                      target="_blank"
                      href="https://github.com/bikramjit7777"
                    >
                      Visit Website
                    </a>
                  </strong>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    {" "}
                    <Icon icon={shopping} />
                    <i className="bi bi-card-checklist"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Dashop</h2>
                  <h3 className="ss-title">Academic wordpress project</h3>
                  <p className="s-description text-center">
                    Dashop is an ecommerce website designed and developed in
                    wordpress. I have used woocommerce plugin along with many
                    others to make this website working.
                  </p>
                  <strong>
                    <a target="_blank" href="http://dashop.bikramjitsingh.ca/">
                      Visit Website
                    </a>
                  </strong>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <Icon icon="simple-icons:netflix" />
                    <i className="bi bi-bar-chart"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Reactflix</h2>
                  <h3 className="ss-title">Personal project</h3>
                  <p className="s-description text-center">
                    Used TMDB API to fetch information about movies and tv
                    series by using axios npm library. Used Flexbox for
                    elegantly displaying components.
                  </p>
                  <strong>
                    <a
                      target="_blank"
                      href="http://reactflix.bikramjitsingh.ca"
                    >
                      Visit Website
                    </a>
                  </strong>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <Icon icon="tabler:virus" />
                    <i className="bi bi-bar-chart"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">COVID-19 Tracker</h2>
                  <h3 className="ss-title">Personal project</h3>
                  <p className="s-description text-center">
                    Used disease.sh API to collect information about COVID-19
                    figures A dropdown of all countries to see cases, recovered
                    and deaths for specific country.
                  </p>
                  <strong>
                    <a
                      target="_blank"
                      href="http://covid-tracker.bikramjitsingh.ca/"
                    >
                      Visit Website
                    </a>
                  </strong>
                </div>
              </div>
            </div>

            
            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <Icon icon={weather} />
                    <i className="bi bi-bar-chart"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Weather Application</h2>
                  <h3 className="ss-title">Personal project</h3>
                  <p className="s-description text-center">
                    Making a request to weather api to collect the available weather
                    information of different locations. This web app is developed in NodeJS.
                  </p>
                  <strong>Not Deployed yet</strong>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <Icon icon={cart} />
                    <i className="bi bi-briefcase"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Drapsio</h2>
                  <h3 className="ss-title">Academic capstone project</h3>
                  <p className="s-description text-center">
                    An ecommerce website for curtains. Developed by using MERN
                    Stack (Mongodb, Express, React and NodeJS) with many cool
                    features.
                  </p>
                  <strong>Not Deployed yet</strong>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <Icon icon={bakery} />
                    <i className="bi bi-bar-chart"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Baking Bella</h2>
                  <h3 className="ss-title">Academic project</h3>
                  <p className="s-description text-center">
                    This is an android application based on bakery Where admin
                    can perform CRUD operations on bakery products and users can
                    selectout of these products.
                  </p>
                  <strong>Not Deployed yet</strong>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <Icon icon={recipe} />
                    <i className="bi bi-bar-chart"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">Recipe App (React)</h2>
                  <h3 className="ss-title">Personal project</h3>
                  <p className="s-description text-center">
                    React application which uses axios to make api call to food
                    api. Users have search option what they are looking for,
                    from variety of recipes.
                  </p>
                  <strong>Not Deployed yet</strong>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="service-box">
                <div className="service-ico">
                  <span className="ico-circle">
                    <Icon icon={fitness} />
                    <i className="bi bi-bar-chart"></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">GRIT</h2>
                  <h3 className="ss-title">Academic project</h3>
                  <p className="s-description text-center">
                    Basic HTML/CSS3 website based on fitness/gym theme. This
                    site is responsive for all devices and designed with core
                    HTML/CSS3.
                  </p>
                  <strong>Not Deployed yet</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
