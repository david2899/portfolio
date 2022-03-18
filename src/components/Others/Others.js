import React from "react";
import { IoShareSocialSharp } from "react-icons/io5";
import { BsFillTelephoneInboundFill, BsWhatsapp } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import {FaTelegramPlane} from "react-icons/fa"
import { SiGmail } from "react-icons/si";
import "./others.css";

export const Others = () => {
  return (
    <div className="content-emails container">
      <h4>
        <span>
          <IoShareSocialSharp className="icon-social" />
        </span>
        Others
      </h4>
      <section className="content-others">
        <div className="other">
          <h5>
            <span>
              <SiGmail style={{ marginRight: "3px", marginBottom: "6px" }} />
            </span>
            Gmail
          </h5>
          <span>jironulload@gmail.com</span>
        </div>
        <div className="other">
          <h5>
            <span>
              <HiLocationMarker
                style={{ marginRight: "3px", marginBottom: "6px" }}
              />
            </span>
            Location
          </h5>
          <div className="d-flex flex-column">
            <span>Rivas, Rivas, Nicaragua.</span>
            <span>Eloy Canals School 3c 1/2 North, B Wilfredo Santana</span>
          </div>
        </div>
        <div className="other">
          <h5>
            <span>
              <BsFillTelephoneInboundFill
                style={{ marginRight: "3px", marginBottom: "6px" }}
              />
            </span>
            Phones
          </h5>
          <div className="d-flex flex-column">
            <span>
              +505 5801 1280
              <BsWhatsapp style={{ marginLeft: "4px", marginBottom: "6px" }} />
            </span>
            <span>+505 8323 3684
            <FaTelegramPlane style={{ marginLeft: "4px", marginBottom: "6px" }} />
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
