import React, {useEffect, useContext} from "react";
import UserContext from "../../context/UserContext";
import {useHistory} from "react-router-dom";

export default function Home() {
	const {userData} = useContext(UserContext);
	
	useEffect(() => {
		if(!userData.user)


	}, [])
	return (
		<div className="page">
			Home
		</div>
		)
}