import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Career from "./pages/Career";
import Poetry from "./pages/Poetry";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Career} />
				<Route exact path="/career" component={Career} />
				<Route exact path="/poetry" component={Poetry} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
