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
			sx={{ justifyContent: 'center', textAlign: 'center' }}
		>
			<Grid item xs={4}>
				<h2>1. Find</h2>
				<img src={PhonePreview} alt='Phone Demo Preview'></img>
			</Grid>
			<Grid item xs={4}>
				<h2>2. Eat</h2>
				<img src={PhoneSearch} alt='Phone Demo Search'></img>
			</Grid>
			<Grid item xs={4}>
				<h2>3. More</h2>
				<img src={PhoneAbout} alt='Phone Demo About'></img>
			</Grid>
		</Grid>
	);
};

export default PhoneDemo;
