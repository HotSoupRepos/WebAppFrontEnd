import React from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import DiscordIcon from "../assets/icons/discord-fill.svg";
import GithubIcon from "../assets/icons/github-fill.svg";
import LinkedInIcon from "../assets/icons/linkedin-box-fill.svg";

export default function Contributor(props) {
  return (
    <Modal
      open={props.showModal}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="contributorModal">
        <Typography
          className="modal-contributor-name"
          variant="h6"
          component="h2"
        >
          {props.contributor.name}
        </Typography>
        <Typography
          className="modal-contributor-title"
          variant="h6"
          component="h4"
        >
          {props.contributor.title}
        </Typography>
        <Typography id="modal-contributor-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula. Duis
          mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
        <Typography className="modal-contributor-skills">
          Skills: random, random, random, random, random.
        </Typography>
        <div className="modal-socials">
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
      </Box>
    </Modal>
  );
}
