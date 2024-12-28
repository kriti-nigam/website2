import React from "react";
import "./Reading.css";

function Reading() {
  return (
    <div className="reading-container">
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
      <header className="reading-header">
        <h1>reading.</h1>
      </header>

      {/* Content Section */}
      <div className="reading-content">
        <p>
          i was an avid reader, inculcated this habit in my schooldays. i used to be
          the kid that read on the bus ride to & from school; i was that dedicated.
          but unfortunately, i didn’t keep at it and eventually paused reading for a
          bit around 12th grade well into my college years. i picked it up back again
          during covid but wasn’t very committed to it. but then i rekindled this old
          flame, so as a promise to myself, i consciously committed to it last year
          and have been very regular at it. i owe a large part of re-building this
          habit to blossoms, a very old bookstore in bangalore.
        </p>
        <p>
          as part of that commitment, i’ve been tracking the books i’m reading. next
          thing to do would be to draft book summaries, reviews. oh also, i started a
          bookclub at IG - although it turned out to be a safe space to talk about
          work, mental health, lifestyle, entrepreneurship, parenting for my
          colleagues, but that’s okay :)
        </p>
        <p>below are the books i’ve read since last year:</p>

        {/* Book List */}
        <ol>
          <li>Zero to One</li>
          <li>Almond</li>
          <li>A Man Called Ove</li>
          <li>all about love</li>
          <li>Old Man and the Sea</li>
          <li>Animal Farm</li>
          <li>The Book Thief</li>
          <li>The Mom Test</li>
          <li>Earthlings</li>
          <li>really good, actually</li>
          <li>Less</li>
          <li>Five People You Meet in Heaven</li>
          <li>Quarterlife: Search of Meaning in Early Adulthood</li>
          <li>Lessons in Chemistry</li>
          <li>Convenience Store Woman</li>
          <li>Letters to a Young Poet</li>
          <li>Crying in H Mart</li>
          <li>The Philosophy of the Alpaca</li>
          <li>The Hard Thing About Hard Things</li>
          <li>Continuous Discovery Habits</li>
          <li>Friends, Lovers and the Big Terrible Thing</li>
          <li>Super Freakonomics</li>
          <li>Slaughterhouse Five</li>
          <li>Welcome to Paradise</li>
          <li>Maybe You Should Talk to Someone</li>
          <li>Anxious People</li>
          <li>The Creative Act</li>
          <li>Cracking the PM Interview</li>
          <li>In Other Words</li>
          <li>Just Kids</li>
          <li>Visual MBA</li>
          <li>Before the Coffee Gets Cold</li>
          <li>Plato and a Platypus Walk into a Bar</li>
          <li>Notes from Underground</li>
          <li>The Woman Destroyed</li>
          <li>Yellowface</li>
          <li>The Authenticity Project</li>
          <li>The Book of Disquiet</li>
          <li>Good Omens</li>
        </ol>
      </div>
    </div>
  );
}

export default Reading;
