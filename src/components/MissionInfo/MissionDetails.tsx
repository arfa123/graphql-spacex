import React from "react";
import { LaunchMissionInfoQuery } from "../../generated/graphql";
import "./index.css";

interface Props {
	data: LaunchMissionInfoQuery
}

const MissionDetails: React.FC<Props> = ({ data }) => {
	return (
		<div className="MissionCont" >
			<h1>{data.launch?.mission_name}</h1>
			<div className="MissionImagesCont">
				{data.launch?.links?.flickr_images?.map((image, i) => {
					return (
						<div key={i} className="ImageCont">
							<img className="MissionImage" src={image || ""} />
						</div>
					);
				})}
			</div>
			<h3>Launch Details</h3>
			<div className="MissionBox">
				<p>{data.launch?.details}</p>
				<p>Launch Year: {data.launch?.launch_year}</p>
				<p>Launch Successful: {data.launch?.launch_success ? "Yes" : "No"}</p>
				<p>Rocket Name: {data.launch?.rocket?.rocket_name}</p>
			</div>
		</div>
	);
};

export default MissionDetails;