import React from "react";
import { Card } from "../components/Card/Card";
import { Footer } from "../components/Footer/Footer";
import {NavBar} from "../components/Navigation/NavBar";
import { Studies } from "../components/Studies/Studies";
import { Projects } from "../components/Projects/Projects";
import { Others } from "../components/Others/Others";
import { MdContacts } from "react-icons/md";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import "../components/Navigation/nav.css";
import "../style/home.css";

export const Home = () => {
  return (
    <>
      <NavBar />
      <section className="content-page">
        <div id="aboutMe" />
          <Card />
        <Studies />
        <Projects />
        <div className="content-contact">
        <h2 className="mt-4 title-contact" id="contact">
          <span>
            <MdContacts className="icon-social" />
          </span>
          Contac
        </h2>
        <SocialMedia />
        <Others />
        </div>
      </section>
      <Footer />
    </>
  );
};
