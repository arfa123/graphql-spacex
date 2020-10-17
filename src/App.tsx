import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import "./App.css";
import MissionContainer from "./components/Mission";
import MissionInfo from "./components/MissionInfo";

function App() {
	return (
		<Router>
			<div className="App">
				<div className="App-header"></div>
				{/* <MissionContainer /> */}
				{/* <MissionInfo /> */}
			</div>
			<Switch>
				<Route exact path="/">
					<MissionContainer />
				</Route>
				<Route path="/:id">
					<MissionInfo />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
