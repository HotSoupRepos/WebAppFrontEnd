import React from "react";
import Header from "./sections/Header/Header";
import HeaderTheme from "./sections/Header/HeaderTheme";
import PhoneDemo from "./sections/phone-demo/PhoneDemo";
import Contact from "./sections/Contact/Contact";
import Contributors from "./sections/Contributors/Contributors";
import MaterialUIExample from './MaterialUiExample';
import { ThemeProvider } from '@mui/material/styles';
import About from './sections/About/About'

const App = () => {
	return (
		<div>

			<ThemeProvider theme={HeaderTheme}>
				<Header />
			</ThemeProvider>
			<PhoneDemo />
			<Contact />
			<Contributors />
		</div>
	);
};

export default App;
