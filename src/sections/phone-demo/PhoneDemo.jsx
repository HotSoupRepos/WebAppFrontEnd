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
			spacing={5}
			sx={{
				textAlign: 'center',
				padding: '2rem 0 3rem 0',
				width: '100vw',
			}}
		>
			<Grid item xs={12} md={4}>
				<Typography variant='h4'>1.Find</Typography>
				<img
					src={PhonePreview}
					style={{ height: 'auto', width: '55%' }}
					alt='Phone Demo Preview'
				></img>
			</Grid>
			<Grid item xs={12} md={4}>
				<Typography variant='h4'>2.Eat</Typography>
				<img
					src={PhoneSearch}
					style={{ height: 'auto', width: '55%' }}
					alt='Phone Demo Search'
				></img>
			</Grid>
			<Grid item xs={12} md={4}>
				<Typography variant='h4'>3.More</Typography>
				<img
					src={PhoneAbout}
					style={{ height: 'auto', width: '55%' }}
					alt='Phone Demo About'
				></img>
			</Grid>
		</Grid>
	);
};

export default PhoneDemo;
