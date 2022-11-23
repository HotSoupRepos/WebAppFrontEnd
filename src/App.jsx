import React from "react";
import PhoneDemo from "./sections/phone-demo/PhoneDemo";
import Contact from "./sections/contact/Contact";
import Contributors from "./sections/contributors/Contributors";
import MaterialUIExample from "./MaterialUiExample";

const App = () => {
	return (
		<div>
			<PhoneDemo />
			<Contact />
			<Contributors />
			<MaterialUIExample />
		</div>
	);
};

export default App;
