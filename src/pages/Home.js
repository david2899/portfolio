import React from "react";
import { Card } from "../components/Card/Card";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/Navigation/NavBar";
import {Studies} from "../components/Studies/Studies";
import { Projects } from "../components/Projects/Projects";
import { FaSpellCheck } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { Others } from "../components/Others/Others";
import { MdContacts } from "react-icons/md";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import "../style/home.css";

export const Home = () => {
  return (
    <>
      <NavBar />
      <section className="content-page">
        <Card />
        <hr />
        <h2 className="mb-4 mt-4">
          <span className="icon-title">
          <FaSpellCheck />
          </span>
          Studies
        </h2>
        <Studies />
        <hr />
        <h2 className="mt-4">
          <span className="icon-title">
          <IoIosRocket />
          </span>
          Projects
        </h2>
        <Projects />
        <hr />
        <h2 className="mt-4">
        <span>
          <MdContacts className="icon-social" />
        </span>
          Contac</h2>
        <SocialMedia />
        <Others />
      </section>
      <Footer />
    </>
  );

};
