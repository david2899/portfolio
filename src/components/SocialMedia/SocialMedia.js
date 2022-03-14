import React from "react";
import { BsDiscord, BsLinkedin, BsTelegram } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillGithub, AiFillFacebook } from "react-icons/ai";
import { RiContactsFill } from "react-icons/ri";

import "./socialMedia.css";

export const SocialMedia = () => {
  return (
    <div className="content-social-media">
      <h4 className="mt-4">
        <span>
          <RiContactsFill style={{ marginRight: "3px", marginBottom: "6px" }} />
        </span>
        Social Media
      </h4>
      <section className="section-links">
        <div className="social">
          <h5>
            <span>
              <AiFillGithub
                style={{ marginRight: "3px", marginBottom: "6px" }}
              />
            </span>
            GitHub
          </h5>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/david2899"
          >
            https://github.com/david2899
          </a>
        </div>
        <div className="social">
          <h5>
            <span>
              <BsLinkedin style={{ marginRight: "3px", marginBottom: "6px" }} />
            </span>
            LinkedIn
          </h5>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/david-jiron-445a48228/"
          >
            linkedin.com/in/david-jiron445a48228
          </a>
        </div>
        <div className="social">
          <h5>
            <span>
              <BsDiscord style={{ marginRight: "3px", marginBottom: "2px" }} />
            </span>
            Discord
          </h5>
          <h6>David28#4798</h6>
        </div>
        <div className="social">
          <h5>
            <span>
              <AiFillFacebook style={{ marginRight: "3px", marginBottom: "6px" }} />
            </span>
            Facebook
          </h5>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.facebook.com/davidezequiel.jironulloa"
          >
            facebook.com/davidezequiel.jironulloa
          </a>
        </div>
        <div className="social">
          <h5>
            <span>
              <FaInstagramSquare
                style={{ marginRight: "3px", marginBottom: "6px" }}
              />
            </span>
            Instagram
          </h5>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.instagram.com/deyvid_exquiel/"
          >
            https://www.instagram.com/deyvid_exquiel/
          </a>
        </div>
        <div className="social">
          <h5>
            <span>
              <BsTelegram style={{ marginRight: "3px", marginBottom: "6px" }} />
            </span>
            Telegram
          </h5>
          <a rel="noreferrer" target="_blank" href="https://t.me/DavidJiron">
            https://t.me/DavidJiron
          </a>
        </div>
      </section>
    </div>
  );
};
