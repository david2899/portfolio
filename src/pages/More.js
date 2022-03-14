import React from "react";
import { Footer } from "../components/Footer/Footer";
import { NavBar } from "../components/Navigation/NavBar";
import { Projects } from "../components/Projects/Projects";
import { Studies } from "../components/Studies/Studies";
import { FaSpellCheck } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io"
import "../style/more.css";

export const More = () => {
  return (
    <>
      <NavBar />
      <section id="studies" className="m-2 content-page">
        <h2 className="mb-4 mt-2">
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
      </section>
      <Footer />
    </>
  );
};
