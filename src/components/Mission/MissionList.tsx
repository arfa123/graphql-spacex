import React from "react";
import { Link } from "react-router-dom";
import { MissionsInfoQuery } from "../../generated/graphql";
import "./index.css";

interface Props {
	data: MissionsInfoQuery
}

const MissionList: React.FC<Props> = ({ data }) => {
	return (
		<>
			{data.launches?.map((launchObj, i) => {
				return (
					<div key={launchObj?.flight_number} className="MissionBox">
						<h2>
							<span>{i + 1}. Mission: </span>
							<span className={launchObj?.launch_success ? "BlueColor" : "RedColor"}>{launchObj?.mission_name}</span>
						</h2>
						<p>Date: {launchObj?.launch_date_local}</p>
						<Link to={`/${launchObj?.flight_number}`}>
							<span className="DetailsBtn">Details</span>
						</Link>
					</div>
				);
			})}
		</>
	);
};

export default MissionList;