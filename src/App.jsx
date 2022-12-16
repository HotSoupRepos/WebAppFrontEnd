import React from 'react';
import PhoneDemo from './sections/phone-demo/PhoneDemo';
import Contact from './sections/Contact/Contact';
import Contributors from './sections/Contributors/Contributors';
import MaterialUIExample from './MaterialUiExample';

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
