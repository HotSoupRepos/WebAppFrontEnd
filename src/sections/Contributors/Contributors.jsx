import React from "react";
import "./Contributors.css";
import DiscordIcon from "../../assets/icons/discord-fill.svg";
import GithubIcon from "../../assets/icons/github-fill.svg";
import LinkedInIcon from "../../assets/icons/linkedin-box-fill.svg";
import { Grid, Avatar, Typography, Stack } from "@mui/material";
import Data from "../../data";
import Contributor from "../../components/Contributor";

const Contributors = () => {
	// Map through contributors from data.js
	const contributors = Data.map((contributor) => {
		return <Contributor key={contributor.id} {...contributor} />;
	});

	return (
		<div className="con-body">
			<div className="contributors-section">
				<div className="contributors-intro">
					<div className="intro-box">
						<h2>Meet The Team</h2>
						<p>Making an impact</p>
					</div>
				</div>
				<Grid container spacing={10}>
					{/* Main Contributors */}
					<Grid
						container
						item
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

					{/* Add a filter option by Frontend-Web, Frontend-App, Backend-App */}

					{/* Additional Contributors will map through json from data.js */}
					<Grid
						container
						item
						display="flex"
						direction="row"
						alignItems="center"
						justifyContent="center"
						spacing={4}
						columnSpacing={5}
					>
						{contributors}
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Contributors;
