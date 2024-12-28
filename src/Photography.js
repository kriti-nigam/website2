import React from "react";
import "./Photography.css";

function Photography() {
  return (
    <div className="photography-container">
      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>work</li>
          <li>interests</li>
        </ul>
      </nav>

      {/* Title Section */}
      <header className="photography-header">
        <h1>photography.</h1>
      </header>

      {/* Content Section */}
      <div className="photography-content">
        <p>
          this is a funny one! this wasn’t one of those things I discovered as a
          child or even aspired to do. but one day, it just clicked (pun intended).
        </p>
        <p>
          i was a fresher in college and had a very cheap phone with a very low
          quality camera, I think it was a redmi 4A. but our college blessed us
          with some of the best sunsets and I would instinctively, take my phone
          out to capture a glimpse of it, always knowing I would never do justice
          to the reality.
        </p>
        <p>
          but I enjoyed it a lot - like it brought me a sense of joy very
          inexplicable and very genuine in nature. soon after, I also started
          editing my pictures on vsco and that hasn’t stopped. i haven’t taken this
          seriously - all pictures i’ve clicked are things i’ve liked witnessing
          with my eyes.
        </p>
        <p>
          i’ve largely captured pictures with my phone (s) and only recently was
          gifted a 35mm. below is a link to my vsco.
        </p>
        <button className="vsco-button">VSCO</button>
      </div>
    </div>
  );
}

export default Photography;
