import React from "react";
import PhoneDemo from "./sections/phone-demo/PhoneDemo";
import Contact from "./sections/Contact/Contact";
import Contributors from "./sections/Contributors/Contributors";
import About from './sections/About/About'

const App = () => {
	return (
		<div>
			<About />
			<PhoneDemo />
			<Contact />
			<Contributors />
		</div>
	);
};

export default App;
