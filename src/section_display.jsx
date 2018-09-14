import React, { Component } from 'react';

import reactLogo from './images/logos/react.png';
import rorLogo from './images/logos/rubyonrails.png';
import cppLogo from './images/logos/cpp.png';
import javascriptLogo from './images/logos/javascript.png';
import htmlcssLogo from './images/logos/htmlcss.png';
import javaLogo from './images/logos/java.png';
import awsLogo from './images/logos/aws.png';
import postgresqlLogo from './images/logos/postgresql.png';
import pythonLogo from './images/logos/python.png';
import dockerLogo from './images/logos/docker.png';

import resumePDF from './images/Melissa_Sheehan_Resume.pdf'
import resumeDOCX from './images/Melissa_Sheehan_Resume.docx'

export default class SectionDisplay extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.sectionIDToName = { //to map backend name of sections to the "pretty format"
      "about-me": "About Me",
      "resume": "Resume",
      "projects":  "Projects",
      "skills": "Skills", 
      "experience": "Experience", 
      "github": "GitHub", 
      "email": "Email",
      "linkedin": "LinkedIn"
    }
  }

  render() {
    let content = "content"

    if(this.props.sectionName == "about-me") {
      content = 
      <div id="about-me-content">
        <p>
        Currently a React and Ruby on Rails Developer looking for full-time employment in the Bay Area
        <br/>
        I'm an enthusiastic, hard-working team leader who strives to improve herself by working in challenging and
        collaborative environments
        <br/>
        If you're reading this you scrolled down or clicked on a link to get here so keep on going to learn more about me! 
        </p>
      </div>
    } else if(this.props.sectionName == "resume") {
      content =
      <div id="resume-content">
        <button className="resume-button"> 
          <a href={resumePDF} download>Resume (.pdf)</a>
        </button>
        <button className="resume-button"> 
          <a href={resumeDOCX} download>Resume (.docx)</a>
        </button>
      </div>
    } else if(this.props.sectionName == "projects") {
      content = 
      <div id="projects-content">
        <a href="https://devpost.com/software/communitytext"><h5>CommunityText, Spectra Hackathon (won "Best use of mLab")</h5></a>
        <p>A web application that uses text messages to form semi-anonymous communities based on interests
        <br />
        Tools: React, MongoDB, Twilio, Heroku</p>

        <h5>KnowYourStudents, Center for Educational Effectiveness</h5>
        <p>Data-visualization site that analyzes class demographics to help educators improve their teaching performance
        <br />
        Tools: React, Ruby on Rails, jQuery, PostgresSQL, AWS Elastic Beanstalk, D3.js for graphs describing class demographics, Redis for caching</p>

        <a href="https://devpost.com/software/timetoeat"><h5>Time2Eat, Cal Hacks at UC Berkeley</h5></a>
        <p>Time2Eat provides you with the proper heating times for whatever food you need and it provides you with an amusing video for you to watch in the meantime
        <br />
        Tools: Ruby, Ruby on Rails, Heroku</p>

        <h5>Photobooth Website, Web Programming Course</h5>
        <p>Image uploading site with auto-generated labels for each image
        <br />
        Tools: Node.js, Google Vision API for machine learning-generated labels for images, SQLite3 for image database, JavaScript, HTML/CSS</p>
        
        <a href="https://devpost.com/software/jaguarjourney"><h5>Jaguar Journey, CSUSM Hackathon</h5></a>
        <p>Educational online game (rendition of Oregon Trails) where you decide the fate of a jaguar and learn about its ecosystem
        <br />
        Tools: HTML, CSS</p>
      </div>
    } else if(this.props.sectionName == "skills") {
      content = 
      <div id="skills-content">
        <h4>1yr+ experience with:</h4>
        <span><img src={reactLogo} alt="React" className="skills-icons"/></span>
        <span><img src={rorLogo} alt="Ruby on Rails" className="skills-icons"/></span>
        <span><img src={cppLogo} alt="C/++" className="skills-icons"/></span>
        <span><img src={javascriptLogo} alt="JavaScript" className="skills-icons"/></span>
        <span><img src={htmlcssLogo} alt="HTML & CSS" className="skills-icons"/></span>
        <span><img src={javaLogo} alt="Java" className="skills-icons"/></span>
        <h4>Familiar with:</h4>
        <span><img src={awsLogo} alt="AWS" className="skills-icons"/></span>
        <span><img src={postgresqlLogo} alt="PostgreSQL" className="skills-icons"/></span>
        <span><img src={pythonLogo} alt="Python" className="skills-icons"/></span>
      </div>
    } else if(this.props.sectionName == "experience") {
      content =
        <div id="experience-content">
          <a href="https://cee.ucdavis.edu/"><h5>Web Developer @ Center for Educational Effectiveness</h5></a>
          <p>Revamping front end into React components, implementing 12+ new features, and refactoring
          legacy code in a fast-paced startup environment</p>

          <a href="http://cs4k.org/"><h5>Tutor @ Computer Science 4 Kids</h5></a>
          <p>Mentored high-school students throughout their year-long course in Python</p>

          <a href="https://www.idtech.com/"><h5>Instructor @ iD Tech </h5></a>
          <p>Led instruction of and supervised students (ages 7-17) the fundamentals of C++ and JavaScript</p>

          <a href="https://www.xifin.com/"><h5>Business Intelligence Engineer Intern @ Xifin </h5></a>
          <p>Maintained, tested, and documented software updates involving critical healthcare data </p>
        </div>
    } else if(this.props.sectionName == "github") {
      content =
        <div id="github-content">
          <a href="https://github.com/melshee">Check out my GitHub</a>
          {/*<p>https://github.com/melshee</p>*/}
        </div>
    } else if(this.props.sectionName == "email") {
      content = 
        <div id="email-content">
          <p>Contact me at <a href="mailto:mxsheehan7@gmail.com?Subject=Hello!" target="_top">msheehan7@gmail.com</a> </p>
        </div>
    } else if(this.props.sectionName == "linkedin") {
      content =
        <div id="linkedin-content">
          <a href="https://www.linkedin.com/in/sheehanmelissa">Connect with me on LinkedIn</a>
        </div>
    }

    return (
      <div className="section-display">
          <h1 id={this.props.sectionName} >{this.sectionIDToName[this.props.sectionName]}</h1>
          {content}
      </div>     
    );
  }
}
