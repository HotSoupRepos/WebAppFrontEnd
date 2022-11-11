import React from "react";
import "./Contributors.css";
import DiscordIcon from "../../assets/icons/discord-fill.svg";
import GithubIcon from "../../assets/icons/github-fill.svg";
import LinkedInIcon from "../../assets/icons/linkedin-box-fill.svg";
import { Grid, Avatar, Typography, Stack } from "@mui/material";

const Contributors = (props) => {
	return (
		<div className="con-body">
			<div className="contributors-section">
				<div className="contributors-intro">
					<div className="intro-box">
						<h2>Meet The Team</h2>
						<p>Making an impact</p>
					</div>
				</div>

				{/* MAIN CONTRIBUTORS */}
				<Grid
					container
					direction="row"
					alignItems="center"
					justifyContent="center"
					spacing={4}
				>
					<Grid
						item
						display="flex"
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Avatar
							alt="President and founder"
							src="https://source.unsplash.com/mEZ3PoFGs_k"
							sx={{ width: 120, height: 120 }}
						/>
						<Typography variant="h5">Robin Weitzman</Typography>
						<Typography variant="subtitle1">President & Founder</Typography>
						<Stack direction="row" spacing={1}>
							<a href="https://linkedin.com/in">
								<img src={LinkedInIcon} alt="linkedin icon"></img>
							</a>
							<a href="https://github.com">
								<img src={GithubIcon} alt="github icon"></img>
							</a>
							<a href="https://discord.com/users/">
								<img src={DiscordIcon} alt="discord icon"></img>
							</a>
						</Stack>
					</Grid>
					<Grid
						item
						display="flex"
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Avatar
							alt="President and founder"
							src="https://source.unsplash.com/mEZ3PoFGs_k"
							sx={{ width: 120, height: 120 }}
						/>
						<Typography variant="h5">Robin Weitzman</Typography>
						<Typography variant="subtitle1">
							Vice President & Founder
						</Typography>
						<Stack direction="row" spacing={1}>
							<a href="https://linkedin.com/in">
								<img src={LinkedInIcon} alt="linkedin icon"></img>
							</a>
							<a href="https://github.com">
								<img src={GithubIcon} alt="github icon"></img>
							</a>
							<a href="https://discord.com/users/">
								<img src={DiscordIcon} alt="discord icon"></img>
							</a>
						</Stack>
					</Grid>
					<Grid
						item
						display="flex"
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<Avatar
							alt="President and founder"
							src="https://source.unsplash.com/mEZ3PoFGs_k"
							sx={{ width: 120, height: 120 }}
						/>
						<Typography variant="h5">Robin Weitzman</Typography>
						<Typography variant="subtitle1">Co Founder</Typography>
						<Stack direction="row" spacing={1}>
							<a href="https://linkedin.com/in">
								<img src={LinkedInIcon} alt="linkedin icon"></img>
							</a>
							<a href="https://github.com">
								<img src={GithubIcon} alt="github icon"></img>
							</a>
							<a href="https://discord.com/users/">
								<img src={DiscordIcon} alt="discord icon"></img>
							</a>
						</Stack>
					</Grid>
				</Grid>

				{/* Add the filter option */}

				{/* Additional contributors should loop through json from Data.js */}
				{/* <div className="contributors-additional">
					<div className="contributor">
						<div className="con-image">
							<img
								className="con-headshot"
								src={props.headshot}
								alt="headshot"
							></img>
						</div>
						<div className="con-content">
							<h1 className="con-name">{props.name}</h1>
							<h2 className="con-title">{props.title}</h2>
						</div>
						<div className="con-socials">
							<a href={props.linkedin}>
								<img src={LinkedInIcon} alt="linkedin icon"></img>
							</a>
							<a href={props.github}>
								<img src={GithubIcon} alt="github icon"></img>
							</a>
							<a href={props.discord}>
								<img src={DiscordIcon} alt="discord icon"></img>
							</a>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default Contributors;
