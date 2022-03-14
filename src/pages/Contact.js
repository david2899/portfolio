import React from "react";
import { Others } from "../components/Others/Others";
import { NavBar } from "../components/Navigation/NavBar";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import "../style/contact.css";
// import { Footer } from "../components/Footer/Footer";

export const Contact = () => {
  return (
    <>
      <NavBar />
      <section className="content-page">
        <h2>Contac</h2>
        <SocialMedia />
        <Others />
      </section>
    </>
  );
};
