import React from 'react';
import './PhoneDemo.css';
import PhoneSearch from '../../assets/images/PhoneSearch.png';
import PhonePreview from '../../assets/images/PhonePreview.png';
import PhoneAbout from '../../assets/images/PhoneAbout.png';
import Grid from '@mui/material/Grid';

const PhoneDemo = () => {
	return (
		<Grid
			className='phone-body'
			container
			spacing={2}
			sx={{
				justifyContent: 'center',
				textAlign: 'center',
				padding: '3rem',
			}}
		>
			<Grid item xs={12} md={4}>
				<h2>1. Find</h2>
				<img src={PhonePreview} Height='460rem' alt='Phone Demo Preview'></img>
			</Grid>
			<Grid item xs={12} md={4}>
				<h2>2. Eat</h2>
				<img src={PhoneSearch} Height='460rem' alt='Phone Demo Search'></img>
			</Grid>
			<Grid item xs={12} md={4}>
				<h2>3. More</h2>
				<img src={PhoneAbout} Height='460rem' alt='Phone Demo About'></img>
			</Grid>
		</Grid>
	);
};

export default PhoneDemo;
