import React from "react";
import "./Music.css";

function Music() {
  return (
    <div className="music-container">
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
      <header className="music-header">
        <h1>music.</h1>
      </header>

      {/* Content Section */}
      <div className="music-content">
        <blockquote>
          “art is how we decorate space, music is how we decorate time.” – jean-michel basquiat
        </blockquote>
        <p>
          music has always been very very dear to me. music is the language of the soul. my parents had a rich influence
          on my music taste so i grew up listening to bryan adams, the carpenters, eric clapton, vengaboys, rd burman and
          kishore kumar. i’m not a singer and i once tried to learn drums (my favorite instrument) in uni but then covid struck :(
        </p>
        <p>
          however, my spotify is a digital footprint that i’m proud of. you can check out my playlists on spotify.
        </p>
        <button className="spotify-button">spotify</button>
      </div>
    </div>
  );
}

export default Music;
