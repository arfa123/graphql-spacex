import React from "react";
import { useMissionsInfoQuery } from "./../../generated/graphql";
import MissionList from "./MissionList";
import "./index.css";

const MissionContainer = () => {

	const { data, error, loading } = useMissionsInfoQuery();

	return (
		<div className="MissionsCont" >
			<h2>Launches</h2>
			<div>
				<div className="ColorBox BlueBgColor"></div>
				<p>= Success</p>
			</div>
			<div>
				<div className="ColorBox RedBgColor"></div>
				<p>= Failed</p>
			</div>
			{(loading || error || !data) ? <h2>Loading...</h2> : <MissionList data={data} />}
		</div>
	);
};

export default MissionContainer;