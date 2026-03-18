import React from "react";
import imageBg from "../assets/images/overlay-bg.jpg";
import { Icon, InlineIcon } from "@iconify/react";
import linkedin from "@iconify/icons-bi/linkedin";
import github from "@iconify/icons-bi/github";

const Contact = () => {
  return (
    <div id="contactMe">
      <section
        id="contact"
        className="paralax-mf footer-paralax bg-image  route"
        style={{ backgroundImage: imageBg }}
      >
        <div className="overlay-mf"></div>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact-mf">
                <div id="contact" className="box-shadow-full" style={{ marginBottom: '3rem' }}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="title-box-2">
                        <h5 className="title-left">SEND MESSAGE</h5>
                      </div>
                      <div>
                        <form
                          action="mailto:bikramjit7777@gmail.com"
                          method="post"
                          role="form"
                          className="php-email-form"
                        >
                          <div className="row">
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  placeholder="Your Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Your Email"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mb-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  rows="5"
                                  placeholder="Message"
                                  required
                                ></textarea>
                              </div>
                            </div>
                            <div className="col-md-12 text-center my-3">
                              <div className="loading">Loading</div>
                              <div className="error-message"></div>
                              <div className="sent-message">
                                Your message has been sent. Thank you!
                              </div>
                            </div>
                            <div className="col-md-12 text-center">
                              <button
                                type="submit"
                                className="button button-a button-big button-rouded"
                              >
                                Send Message
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="title-box-2 pt-4 pt-md-0">
                        <h5 className="title-left">GET IN TOUCH</h5>
                      </div>
                      <div className="more-info">
                        <p className="lead">
                          If you have any query, reach out to me.
                        </p>
                        <ul className="list-ico">
                          <li>
                            <span className="bi bi-geo-alt"></span>
                            Ontario, Canada
                          </li>

                          <li>
                            <span className="bi bi-envelope"></span>
                            bikramjit7777@gmail.com
                          </li>
                        </ul>
                      </div>
                      <div className="socials">
                        <ul>
                          <li>
                            <a
                              href="https://www.linkedin.com/in/bikramjit-singh-khokhar-3835561ab/"
                              target="_blank"
                            >
                              <span className="ico-circle">
                                <Icon icon={linkedin} />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              target="_blank"
                              href="https://github.com/bikramjit7777"
                            >
                              <span className="ico-circle">
                                <Icon icon={github} />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
