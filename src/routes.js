import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainView from './components/main-view/main-view';
import AboutUs from './components/about-us/about-us';
import HelperLogin from './components/HelperLogin/helperLogin';

const Routing = () => {
return(
	<main>
		<Routes>
					<Route exact path="/" element={<MainView/>} />	
					<Route exact path="/about-us" element={<AboutUs/>} />
					<Route exact path="/helper-login" element={<HelperLogin/>} />
		</Routes>
	</main>
	);
}

export default Routing;
