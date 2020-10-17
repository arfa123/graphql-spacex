import React from "react";
import { useParams } from "react-router-dom";
import { useLaunchMissionInfoQuery } from "../../generated/graphql";
import MissionDetails from "./MissionDetails";

const MissionInfo = () => {

	const { id } = useParams();

	const { data, error, loading } = useLaunchMissionInfoQuery({
		variables: { id: id }
	});

	if (loading) {
		return <h2>Loading...</h2>
	}

	if (error || !data) {
		return <h1>Error</h1>
	}

	return (
		<MissionDetails data={data} />
	);
};

export default MissionInfo;