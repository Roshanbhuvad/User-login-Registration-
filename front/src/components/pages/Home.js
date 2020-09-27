import React, {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import UserContext from "../../context/UserContext";
import Categorytile from "./Categorytile";

export default function Home() {
	const {userData} = useContext(UserContext);

	return (
		<div className="page">

      {userData.user ? (
        <h1>Welcome {userData.user.displayName}<Categorytile /></h1>
         
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Login</Link>
        </>
				
      )}
      <div className="footer">
      <p><a> User Profile App using React, axios and Node.JS</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a target = "_blank" href = "https://github.com/Roshanbhuvad/User-login-Registration-">View the source code on GitHub</a></p>
    </div>
    </div>
  );
}