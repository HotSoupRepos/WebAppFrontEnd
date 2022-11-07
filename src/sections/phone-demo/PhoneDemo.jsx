import React from 'react';
import './PhoneDemo.css';
import PhoneSearch from '../../assets/images/PhoneSearch.png';
import PhonePreview from '../../assets/images/PhonePreview.png';
import PhoneAbout from '../../assets/images/PhoneAbout.png';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const PhoneDemo = () => {
	return (
		<Grid
			className='phone-body'
			container
			spacing={3}
			sx={{
				justifyContent: 'center',
				textAlign: 'center',
				padding: '2rem 0 3rem 0',
			}}
		>
			<Grid item xs={12} md={4}>
				<Typography variant='h5'>1. Find</Typography>
				<img src={PhonePreview} Height='400rem' alt='Phone Demo Preview'></img>
			</Grid>
			<Grid item xs={12} md={4}>
				<Typography variant='h5'>2. Eat</Typography>
				<img src={PhoneSearch} Height='400rem' alt='Phone Demo Search'></img>
			</Grid>
			<Grid item xs={12} md={4}>
				<Typography variant='h5'>3. More</Typography>
				<img src={PhoneAbout} Height='400rem' alt='Phone Demo About'></img>
			</Grid>
		</Grid>
	);
};

export default PhoneDemo;
