import React, {useState, useContext} from "react";
import {useHistory} from "react-router-dom";
import UserContext from "../../context/UserContext"
import Axios from "axios";

export default function Login() {
	const [email, setEmail] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	const [password, setPassword] = useState();
	
	const {setUserData} = useContext(UserContext);
	const history = useHistory();
	return (
		<div>
			Login
		</div>
		)
}