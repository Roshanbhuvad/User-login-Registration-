import React, {useContext} from "react";
import {Link, useHistory} from "react-router-dom";
import UserContext from "../../context/UserContext";


export default function Home() {
	const {userData} = useContext(UserContext);

	return (
		<div className="page">
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}</h1>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <Link to="/login">Login</Link>
        </>
				
      )}
      <div className="footer">
      <p><a target = "_blank" href = "www.github.com"> User Profile App using React, axios and Node.JS</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a target = "_blank" href = "https://github.com/Roshanbhuvad/User-login-Registration-">View the source on GitHub</a></p>
    </div>
    </div>
  );
}