import React from "react";
import DavidImG from "../../assets/img/david.png";
import "./card.css";

export const Card = () => {
  return (
    <>
      <div className="contentCard">
        <section className="content-text-information">
          <h1>David Exequiel Jirón Ulloa</h1>
          <h5 className="card-information">
            Rivas, Rivas, Nicaragua February 28, 1999.
          </h5>

          <section className="hobiies">
            <p>
              <span className="icons-card">
                <i className="fas fa-code"></i>
              </span>
              Web developer
            </p>
            <p>
              <span className="icons-card">
                <i className="fas  fa-coins"></i>
              </span>
              BlockChain developer - Flow BlockChain
            </p>
            <p>
              <span className="icons-card">
                <i className="fas  fa-mobile-screen-button"></i>
              </span>
              Mobile developer - React Native
            </p>
            <p>
              <span className="icons-card">
                <i className="fas fa-user-tie"></i>
              </span>
              Lic. Tourism & Hotel Administration
            </p>
          </section>
        </section>
        <div className="flip-card m-4">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src={DavidImG} alt="Avatar" className="davidIMG" />
            </div>
          </div>
        </div>
      </div>
      <section className="content-p">
        <p className="description container">
          From a very young age I started my curiosity and love for technology,
          at only 15 years old he already mastered technologies such as Word,
          Excel and Power Point, That is, it already handles all the basic
          functions on a computer, i am currently studying English.
        </p>
        <p className="description container">
          Taking advantage of my outgoing personality, I chose to study Tourism
          and Hotel Administration, since I am passionate about knowing the
          different places, cultures, gastronomy and traditions of the world,
          because I think that behind each person or place there is always a
          beautiful story to listen to.
        </p>
        <p className="description container">
          At the age of 19 in love with app development I started learning Web
          programming with the Javascript language, React Js, Next Js and
          currently I am about to finish React Native for Front End and Node Js
          Api - Rest for Back End.
        </p>
        <p className="description container">
          In the year 2021 interested in blockchain and cryptocurrency start
          learning about (NFT) Non-Fungible Token, with Flow Blockchain I
          currently have experience with 3 different NFT Markets where provided
          my services in the blockchain in Front End and Back End.
        </p>
        <p className="description container">
          I consider myself a person with a very good spirit of adaptation and
          problem solving with a lot of resistance to stress, teamwork, respect,
          empathy and, above all, a fast learner..
        </p>
        <p className="description container">
          In my free time I like to exercise, read, play soccer and above all
          things learn and take on new technology challenges.
        </p>
      </section>
    </>
  );
};
