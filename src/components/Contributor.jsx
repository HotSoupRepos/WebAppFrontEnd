import React, { useState } from "react";
import DiscordIcon from "../assets/icons/discord-fill.svg";
import GithubIcon from "../assets/icons/github-fill.svg";
import LinkedInIcon from "../assets/icons/linkedin-box-fill.svg";
import ContributorModal from "./ContributorModal";

export default function Contributor(props) {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="contributor">
      <div className="con-image">
        <img
          className="con-headshot"
          src={props.contributor.headshot}
          alt="headshot"
        ></img>
      </div>
      <div className="con-content">
        <h1 onClick={handleShow} className="con-name">
          {props.contributor.name}
        </h1>
        <h2 className="con-title">{props.contributor.title}</h2>
      </div>
      <div className="con-socials">
        <a href={props.contributor.linkedin}>
          <img src={LinkedInIcon} alt="linkedin icon"></img>
        </a>
        <a href={props.contributor.github}>
          <img src={GithubIcon} alt="github icon"></img>
        </a>
        <a href={props.contributor.discord}>
          <img src={DiscordIcon} alt="discord icon"></img>
        </a>
      </div>
      <ContributorModal
        contributor={props.contributor}
        showModal={showModal}
        handleClose={handleClose}
      />
    </div>
  );
}
