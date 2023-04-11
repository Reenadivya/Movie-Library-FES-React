import React from "react";

function About() {
  return (
    <section id="about">
      <h1 className="about__header">ABOUT</h1>
      <p className="about__para">
        Welcome to my movie app! This app is a comprehensive platform where you
        can find all the latest movies in one place. Whether you're a movie buff
        or just looking for something new to watch, our app has got you covered.
        We provide detailed information about each movie, including ratings,
        release dates, and synopsis. This app was created as a portfolio project
        to showcase our development skills. The app utilizes the TMDB API to
        provide movie data, so please be aware of the rate limit and use the app
        responsibly. We hope you enjoy using our movie app!
      </p>
    </section>
  );
}

export default About;
