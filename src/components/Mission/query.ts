import gql from "graphql-tag";

export const MissionsInfo = gql`
query MissionsInfo{
	launches {
		flight_number
		mission_name
		launch_date_local
		launch_success
	}
}`;