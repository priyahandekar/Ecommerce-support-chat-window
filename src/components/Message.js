import React from "react";

const Message = ({ messageBody }) => {
	const { sender, message, timestamp } = messageBody;

	return (
		<div className="message-container">
			<div
				className="message"
				style={{
					backgroundColor: sender === "BOT" ? "white" : "#027CD5",
					marginLeft: sender === "USER" ? "auto" : "unset",
				}}
			>
				<div>{message}</div>
				<div style={{ marginLeft: "83%" }}>
					{new Date(timestamp).getHours() +
						":" +
						new Date(timestamp).getMinutes()}
				</div>
			</div>
		</div>
	);
};

export default Message;
