import React from "react";
import { Grid, Avatar, Typography, Stack } from "@mui/material";
import DiscordIcon from "../assets/icons/discord-fill.svg";
import GithubIcon from "../assets/icons/github-fill.svg";
import LinkedInIcon from "../assets/icons/linkedin-box-fill.svg";
const Contributor = (props) => {
	return (
		<Grid
			item
			display="flex"
			direction="column"
			justifyContent="space-between"
			alignItems="center"
			rowSpacing={10}
		>
			<Avatar
				alt={props.name}
				src={props.headshot}
				sx={{ width: 100, height: 100 }}
			/>
			<Typography variant="h6">{props.name}</Typography>
			<Typography variant="caption">{props.title}</Typography>
			<Stack direction="row" spacing={1}>
				<a href={props.linkedin}>
					<img src={LinkedInIcon} alt="linkedin icon"></img>
				</a>
				<a href={props.github}>
					<img src={GithubIcon} alt="github icon"></img>
				</a>
				<a href={props.discord}>
					<img src={DiscordIcon} alt="discord icon"></img>
				</a>
			</Stack>
		</Grid>
	);
};

export default Contributor;
