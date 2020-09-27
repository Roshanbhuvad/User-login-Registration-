import React from "react";

export default function ErrorNotice() {
	return (
		<div className="error-notice">
			<span>{props.message}</span>
			<button onClick={props.clearError}></button>
		</div>
	);
}