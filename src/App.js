import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Career from "./pages/Career";
import Poetry from "./pages/Poetry";
import Landing from "./pages/Landing";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/career" component={Career} />
				<Route exact path="/poetry" component={Poetry} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
