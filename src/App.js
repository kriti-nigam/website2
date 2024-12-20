import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <nav className="navbar">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>work</li>
          <li>interests</li>
        </ul>
      </nav>

      <header className="header">
        <div className="intro">
          <h1>
            hello, I'm Kriti, a <br /> <span className="highlight">product manager</span>
          </h1>
          <p>based in Bangalore.</p>
          <button className="btn">resume</button>
        </div>
        <div className="profile-pic">
          <img src="profile.jpg" alt="Profile" />
        </div>
      </header>

      <section className="about">
        <h2>about.</h2>
        <p>
          if I have to be honest with you, I've never found intros easy—like how do I
          capture the whole essence of my being in a few words? But let's see how I
          fare out.
        </p>
        <p>
          i write PRDs for a living, work out for mental health, read books for
          sanity, and click pictures for fun. Boring? Maybe.
        </p>
      </section>

      <section className="work">
  <h2>work.</h2>
  <p>
    i've been in product for ~4 years now, straight out of college and have
    worked in startups and enterprises across healthcare, fintech (trading),
    and now in the web hosting space.
  </p>
  <p>
    i enjoy the generalist nature of my work – helps me navigate chaos, although in the initial years, it was a bit daunting. i have a background in CSE and as part of my bachelor’s curriculum, we were expected to do a semester as an internship – that’s when i stumbled upon Proactive, and i haven’t looked back since.
  </p>
  <div className="work-item">
    <div className="work-left">
      <p><strong>Aug’24 - present</strong></p>
    </div>
    <div className="work-right">
      <p><strong>Newfold Digital</strong></p>
      <p>Learning about domains and web hosting, managing P&L for domains across the SEA brands.</p>
    </div>
  </div>
  <div className="work-item">
    <div className="work-left">
      <p><strong>May’24 - present</strong></p>
    </div>
    <div className="work-right">
      <p><strong>Neerakriti</strong></p>
      <p>Promoting Indian home decor and helping my mum find an alternate career.</p>
    </div>
  </div>
  <div className="work-item">
    <div className="work-left">
      <p><strong>2023 - 2024</strong></p>
    </div>
    <div className="work-right">
      <p><strong>IG Group</strong></p>
      <p>Learned about leveraged trading, managing asymmetric credit risk. Built muscle for working at scale (mn+).</p>
    </div>
  </div>
  <div className="work-item">
    <div className="work-left">
      <p><strong>2021 - 2023</strong></p>
    </div>
    <div className="work-right">
      <p><strong>Proactive For Her</strong></p>
      <p>Started my professional stint with an early-stage startup, learned everything here. Built an MVP, scaled it, raised series A, and saw users grow from 3/month to 5000/month.</p>
    </div>
  </div>
</section>



      <section className="interests">
        <h2>interests.</h2>
        <p>now i happen to be a woman of multiple interests, so bear with me in this section rolls up her sleevessome of them are more seasoned and I’ve been at them for a while, some are more recent and possibly an outcome of living away from friends and family. i’ve been away from home for about 3 years and its taught me a few things. so after some navigation, i’ve expanded my interests. they now include exercising regularly, trying to perfect my mum’s chicken curry recipe and the occasional binge watching. below are some of my more long-standing interests-</p>
        <br/>
        <br/>
        <div className="interest-grid">
          <div>Reading
            <img src="reading.jpeg" alt="Interest-Reading" />
          </div>
          <div>Photography
            <img src="photography.jpg" alt="Interest-Photography" />
          </div>
          <div>Music
            <img src="music.jpg" alt="Interest-Music" />
          </div>
          <div>Writing
            <img src="writing.jpg" alt="Interest-Writing" />
          </div>
        </div>
      </section>

      <footer className="footer">
  <h2>stay in touch.</h2>
  <p>
    thank you for stopping by and reading. fun fact: all pictures used here have been clicked by me :)
  </p>
  <p>
    if you want to stay in touch, here’s how you can reach out:
  </p>
  <div className="social-icons">
    <a href="https://www.linkedin.com/in/kriti-nigam-34549a185/" target="_blank" rel="noopener noreferrer">
      <img src="linkedin.png" alt="LinkedIn" />
    </a>
    <a href="https://x.com/KritiNigam4" target="_blank" rel="noopener noreferrer">
      <img src="twitter.png" alt="Twitter" />
    </a>
    <a href="mailto:kritinigam3299@gmail.com">
      <img src="email.png" alt="Email" />
    </a>
  </div>
</footer>
</div>
);
}

export default App;