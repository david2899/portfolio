import React from "react";
import { FaCalculator, FaGamepad, FaBaby } from "react-icons/fa";
import {BsCurrencyExchange} from "react-icons/bs"
import {GiGamepadCross} from "react-icons/gi"
import { SiHiveBlockchain } from "react-icons/si";
import {RiStarSFill} from "react-icons/ri"
import "./projects.css";

export const Projects = () => {
  return (
    <div className="content-project">
      <div className="content-projects">
        <h4>
          <span className="icon-name-project">
            <SiHiveBlockchain
               className="icon-project"
            />
          </span>
          Gmdy NFT Market Place.
        </h4>
        <span className="as">As Blockchain Developer</span>
        <a rel="noreferrer" target="_blank" href="https://market.gmdy.co/">
          https://market.gmdy.co/
        </a>
      </div>
      <div className="content-projects">
        <h4>
          <span className="icon-name-project">
            <FaCalculator
             className="icon-project"
            />
          </span>
          Basic Calculator.
        </h4>
        <span className="as">As Full Satck Developer</span>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://calculadora-ef010.firebaseapp.com"
        >
          calculadora-ef010.web.app
        </a>
      </div>
      <div className="content-projects">
        <h4>
          <span className="icon-name-project">
            <SiHiveBlockchain
            className="icon-project"
            />
          </span>
          Experia NFT Market Place.
        </h4>
        <span className="as">As Blockchain Developer & Front End</span>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://evdev.experiaview.com/"
        >
          https://evdev.experiaview.com/
        </a>
      </div>
      <div className="content-projects">
        <h4>
          <span className="icon-name-project">
            <RiStarSFill
              className="icon-project"
            />
          </span>
           Compete - Admin.
        </h4>
        <span className="as">As Front End Developer</span>
        <a rel="noreferrer" target="_blank" href="https://play.google.com/store/apps/details?id=com.competeapp">
        https://play.google.com
        </a>
      </div>
      <div className="content-projects">
        <h4>
          <span className="icon-name-project">
            <FaGamepad
               className="icon-project"
            />
          </span>
          Qorbaby Blockchain Game.
        </h4>
        <span className="as">As Back End Developer</span>
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.qorbaby.com/"
        >
         https://www.qorbaby.com/
        </a>
      </div>
      <div className="content-projects">
        <h4>
          <span className="icon-name-project">
            <GiGamepadCross
              className="icon-project"
            />
          </span>
          Mana Games.
        </h4>
        <span className="as">As Back End Developer</span>
        <a rel="noreferrer" target="_blank" href="https://app.managames.io/">
        https://app.managames.io/
        </a>
      </div>
      <div className="content-projects">
        <h4>
          <span className="icon-name-project">
            <BsCurrencyExchange
             className="icon-project"
            />
          </span>
          Nicas NFT Market Place.
        </h4>
        <span className="as">As Team, Full Stack Developer & Block Chain</span>
        <span>
          In progress
        </span>
      </div>
      <div className="content-projects">
        <h4>
          <span className="icon-name-project">
            <FaBaby
              className="icon-project"
            />
          </span>
          Kind Link.
        </h4>
        <span className="as">As Back End Developer</span>
        <span>
          In progress
        </span>
      </div>
      <h4 className="text-footer">And other projects that I can not publish since they were created with all the copyright of the owner.</h4>
    </div>
  );
};
