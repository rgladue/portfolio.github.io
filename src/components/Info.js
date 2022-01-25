import React from "react";
import interview from "../images/interview.png";
import smartlist from "../images/smart-list.png";
import tweeter from "../images/tweeter.png";


const Info = () => {

  const getTwitty = () => {
    window.open("https://twitter.com/RGAlexJR");
  }
  const getLinky = () => {
    window.open("https://www.linkedin.com/in/robert-gladue-2a8a82a9/")
  }
  const getGitty = () => {
    window.open("https://github.com/rgladue")
  }
  return(
    <div className="info">
      <h2 className="about">About Me</h2>
      <div>
        <p>Here is a quick rundown of my tech skills:</p>
        <section className="container">
        <article className="front-end">
          <h4>Front-End</h4>
          <ul>
            <li>Html</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>sass/scss</li>
            <li>jquery/ajax</li>
            <li>bootstrap css</li>
          </ul>
        </article>
        <article className="back-end">
          <h4>Back-End</h4>
          <ul>
            <li>Restful apis</li>
            <li>postgresql</li>
            <li>mysql</li>
            <li>nodejs</li>
            <li>ruby</li>
            <li>solidity</li>
          </ul>
        </article>
        <article className="frameworks">
          <h4>Frameworks</h4>
          <ul>
            <li>ReactJS</li>
            <li>react native</li>
            <li>expressjs</li>
            <li>rails</li>
            
          </ul>
        </article>
        </section>
        <p>scroll down for more information.</p>
        <h2>👇👇👇👇👇</h2>
      </div>
    <div className="bio">

      <div className="bio-banner"></div>
      <h1>A little more about who i am:</h1>
    <p className="bio-card">I am a Self-Taught/Lighthouse Labs Developer who is skilled in full stack web development.
       My interests lie in website development, blockchain technology, video game development, photography, music, and storytelling as an art.</p>
    <br></br>
       <p className="bio-card">My past experience is in education and mental health and wellness. I have many skills that benefit project management, 
       organizational management, and administrative operations.</p>

       <div className="projects"></div>
       <div className="showcase">
         <h1>Projects</h1>
         <section className="projects-container">
          <article className="smart-list">
            <img src={smartlist} className="int-img"></img>
          
            <p>full-stack auto categorizing to-do list built using express, nodejs, jquery, ejs, postgres, with api calls for each category included.</p>
          </article>
          <article className="tweeter">
          <img src={tweeter} className="int-img"></img>
           
            <p>single page app front end build using jquery, ajax, sass. a twitter-based copycat</p>
          </article>
          <article className="int-scheduler">
          <img src={interview} className="int-img"></img>
           
            <p>single page app built with reactjs, using modern techniques. technologies used include react, axios, express, postgres, nodejs. storybook, jest, cypress for testing</p>
          </article>
         </section>
       </div>
    </div>
    <footer>
      <p onClick={getTwitty} className="link">twitter</p>
      <p onClick={getLinky} className="link">linkedin</p>
      <p onClick={getGitty} className="link">github</p>
    </footer>
    </div>
    
  )
};

export default Info;