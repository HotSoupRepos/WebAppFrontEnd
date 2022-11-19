import React from "react";
import PhoneDemo from "./sections/phone-demo/PhoneDemo";
import Contact from "./sections/Contact/Contact";
import Contributors from "./sections/Contributors/Contributors";
import MaterialUIExample from './MaterialUiExample'
import About from './sections/About/About'

const App = () => {
	return (
		<div>
			<About />
			<PhoneDemo />
			<Contact />
			<Contributors />
			<MaterialUIExample/>
		</div>
	);
};

export default App;
