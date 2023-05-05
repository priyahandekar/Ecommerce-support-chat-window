import React, { useState } from "react";
import Message from "./Message";

const ChatScreen = ({ messageList, handleSend }) => {
	const [inputMessage, setInputMessage] = useState("");
	const handleSendMsg = (val) => {
		setInputMessage(val);
	};
	return (
		<div className="chat-screen">
			{messageList &&
				messageList.length > 0 &&
				messageList.map((msg) => (
					<Message key={msg.messageId} messageBody={msg} />
				))}
			{messageList.length === 0 && <div>Send a message to start chatting</div>}
			<div>
				<div
					className="help-container"
					style={{ display: "flex", flexDirection: "column" }}
				>
					<div className="desc">Please let me know what help is needed</div>
					<div className="btn">Issue with item delivered</div>
					<div className="btn">bill/invoice</div>
					<div className="btn">Others</div>
				</div>
			</div>
			<div className="input-msg">
				<input
					type="text"
					className="input"
					onChange={(e) => handleSendMsg(e.target.value)}
				/>
				<button onClick={() => handleSend()}>Send</button>
			</div>
		</div>
	);
};

export default ChatScreen;
