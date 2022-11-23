import React from "react";
import "./Contact.css";
import { Grid, TextField, Typography, Button } from "@mui/material";

const Contact = () => {
	return (
		<div>
			<Grid
				container
				direction="column"
				justifyContent="center"
				alignItems="center"
				spacing={4}
				sx={{ border: "1px dashed grey" }}
			>
				<Grid
					item
					display="flex"
					direction="column"
					justifyContent="center"
					alignItems="center"
					xs={12}
					// sx={{ border: "1px dashed grey" }}
				>
					<Typography variant="h3" sx={{ color: "#ffc529" }}>
						Contact Us
					</Typography>
					<Typography variant="p" sx={{ color: "#ffffff" }}>
						Got A Question? We'd Love To Chat! Send A Message!
					</Typography>
				</Grid>
				<Grid
					container
					item
					direction="column"
					justifyContent="center"
					alignItems="center"
					spacing={2}
					xs={12}
					// sx={{ border: "1px dashed grey" }}
				>
					<Grid item>
						<TextField
							required
							id="name"
							label="Name"
							defaultValue=" "
							className="yellow"
							sx={{ color: "#ffc529", borderRadius: 100, borderColor: "#fff" }}
						></TextField>
					</Grid>
					<Grid item>
						<TextField
							required
							id="email"
							label="Email"
							defaultValue=" "
						></TextField>
					</Grid>
					<Grid item>
						<TextField
							required
							multiline
							label="Message"
							defaultValue=" "
						></TextField>
					</Grid>
					<Grid item>
						<Button>Send Message</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;
