import React from "react";
import Header from "./sections/Header/Header";
import HeaderTheme from "./sections/Header/HeaderTheme";
import PhoneDemo from "./sections/phone-demo/PhoneDemo";
import Contact from "./sections/Contact/Contact";
import Contributors from "./sections/Contributors/Contributors";
import MaterialUIExample from './MaterialUiExample';
import { ThemeProvider } from '@mui/material/styles';

const App = () => {
	return (
		<div>
			<ThemeProvider theme={HeaderTheme}>
				<Header />
			</ThemeProvider>
			<PhoneDemo />
			<Contact className='contact' />
			<Contributors className="team" />
			<MaterialUIExample/>
		</div>
	);
};

export default App;
