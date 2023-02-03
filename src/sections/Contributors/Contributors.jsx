import React from "react";
import "./Contributors.css";
import DiscordIcon from "../../assets/icons/discord-fill.svg";
import GithubIcon from "../../assets/icons/github-fill.svg";
import LinkedInIcon from "../../assets/icons/linkedin-box-fill.svg";
import ContributorsData from "../../Data"

const Contributors = (props) => {
	return (
		<div id="Team" className="con-body">
			<div className="contributors-section">
				<div className="contributors-intro">
					<div className="intro-box">
						<h2>Meet The Team</h2>
						<p>Making an impact</p>
					</div>
				</div>

				{/* MAIN CONTRIBUTORS */}
				<div className="contributors-main">
					<div className="contributor-main">
						<div className="con-main-image">
							<img
								className="con-main-headshot"
								src="https://source.unsplash.com/mEZ3PoFGs_k"
								alt="headshot"
							></img>
						</div>
						<div className="con-main-content">
							<h3 className="con-main-name">Robin Weitzman</h3>
							<h4 className="con-main-title">President & Founder</h4>
							<div className="con-socials">
								<a href="https://linkedin.com/in">
									<img src={LinkedInIcon} alt="linkedin icon"></img>
								</a>
								<a href="https://github.com">
									<img src={GithubIcon} alt="github icon"></img>
								</a>
								<a href="https://discord.com/users/">
									<img src={DiscordIcon} alt="discord icon"></img>
								</a>
							</div>
						</div>
					</div>
					<div className="contributor-main">
						<div className="con-main-image">
							<img
								className="con-main-headshot"
								src="https://source.unsplash.com/mEZ3PoFGs_k"
								alt="headshot"
							></img>
						</div>
						<div className="con-main-content">
							<h3 className="con-main-name">Jasmine Love</h3>
							<h4 className="con-main-title">Vice Presdient & Founder</h4>
							<div className="con-socials">
								<a href="https://linkedin.com/in">
									<img src={LinkedInIcon} alt="linkedin icon"></img>
								</a>
								<a href="https://github.com">
									<img src={GithubIcon} alt="github icon"></img>
								</a>
								<a href="https://discord.com/users/">
									<img src={DiscordIcon} alt="discord icon"></img>
								</a>
							</div>
						</div>
					</div>
					<div className="contributor-main">
						<div className="con-main-image">
							<img
								className="con-main-headshot"
								src="https://source.unsplash.com/mEZ3PoFGs_k"
								alt="headshot"
							></img>
						</div>
						<div className="con-main-content">
							<h3 className="con-main-name">Jasmine Love</h3>
							<h4 className="con-main-title">Co Founder</h4>
							<div className="con-socials">
								<a href="https://linkedin.com/in">
									<img src={LinkedInIcon} alt="linkedin icon"></img>
								</a>
								<a href="https://github.com">
									<img src={GithubIcon} alt="github icon"></img>
								</a>
								<a href="https://discord.com/users/">
									<img src={DiscordIcon} alt="discord icon"></img>
								</a>
							</div>
						</div>
					</div>
				</div>

				{/* Add the filter option */}

				<div className="contributors-additional">
					{ContributorsData.map((contributor) => {
						return (
							<div className="contributor-additional">
								<div className="con-image">
									<img
										className="con-headshot"
										src={contributor.headshot}
										alt="headshot"
									></img>
								</div>
								<div className="con-additional-info">
									<div className="con-content">
										<h1 className="con-name">{contributor.name}</h1>
										<h2 className="con-title">{contributor.title}</h2>
									</div>
									<div className="con-socials">
										<a href={contributor.linkedin}>
											<img src={LinkedInIcon} alt="linkedin icon"></img>
										</a>
										<a href={contributor.github}>
											<img src={GithubIcon} alt="github icon"></img>
										</a>
										<a href={contributor.discord}>
											<img src={DiscordIcon} alt="discord icon"></img>
										</a>
									</div>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	);
};

export default Contributors;
