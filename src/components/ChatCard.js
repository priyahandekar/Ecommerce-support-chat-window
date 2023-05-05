import React from "react";

const ChatCard = ({ chat, handleChatWindow, isChatWindowOpen }) => {
	const { imageURL, orderId, title, latestMessageTimestamp, id, messageList } =
		chat;
	const lastMsg = messageList.pop();
	console.log(chat);
	return (
		<>
			<div
				className="chat-card"
				onClick={() => handleChatWindow(id)}
				style={{ backgroundColor: isChatWindowOpen ? "#f0f3f6" : "" }}
			>
				<div className="thumbnail">
					<img src={imageURL} alt="thumbnail" height="50px" width="50px" />
				</div>
				<div className="order-title">
					<div>{title}</div>
					<div>{orderId}</div>
					<div>{lastMsg?.message}</div>
				</div>
				<div>
					<div>{new Date(latestMessageTimestamp).toLocaleDateString()}</div>
				</div>
			</div>
			<hr style={{ color: "#f0f0f0" }} />
		</>
	);
};

export default ChatCard;
