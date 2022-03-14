import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { DiNodejsSmall } from "react-icons/di";
import { GiProgression } from "react-icons/gi";
import { SiJavascript } from "react-icons/si";
import { IoMdSchool } from "react-icons/io";
import "./studies.css";

export const Studies = () => {
  return (
    <div className=" content-1">
      <div>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Upoli - Rivas
        </h4>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Paltzi
        </h4>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Paltzi
        </h4>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Paltzi
        </h4>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Paltzi - In Proggres
        </h4>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Udemy
        </h4>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Udemy
        </h4>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Ingles A2
        </h4>
        <h4>
          <span className="icon-identify">
            <IoMdSchool />
          </span>
          Block Chain
        </h4>
      </div>
      <div className="d-flex flex-column">
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
        <span className="icon-arrow">
          <i className="fas fa-arrows-left-right"></i>
        </span>
      </div>
      <div className="mt-2 align-items-center">
        <h4 className="text-identify">
          <span className="icon-identify">
            <i className="fa fa-martini-glass-citrus"></i>
          </span>
          Tourism & Hotel Administration.
        </h4>
        <h4 className="">
          <span className="icon-identify">
            <DiNodejsSmall />
          </span>
          Node Js.
        </h4>
        <h4 className="">
          <span className="icon-identify">
            <FaReact />
          </span>
          Next Js.
        </h4>
        <h4 className="">
          <span className="icon-identify">
            <SiJavascript />
          </span>
          JavaScript Professional Course.
        </h4>
        <h4 className="">
          <span className="icon-identify">
            <FaReact />
          </span>
          React Native.
        </h4>
        <h4 className="">
          <span className="icon-identify">
            <FaReact />
          </span>
          React JS + Redux + ES6
        </h4>
        <h4 className="">
          <span className="icon-identify">
            <AiFillGithub />
          </span>
          GitHub
        </h4>
        <h4 className="">
          <span className="icon-identify">
            <GiProgression />
          </span>
          In progress.
        </h4>
        <h4 className="">
          <span className="icon-identify">
            <i className="fas  fa-coins"></i>
          </span>
          Flow Open Worlds.
        </h4>
      </div>
    </div>
  );
};
