import React, { useEffect, useState } from "react";
import { CHAT_API } from "../utils/constants";
import ChatCard from "./ChatCard";
import ChatScreen from "./ChatScreen";
import { useSelector, useDispatch } from "react-redux";
import { fetchChats } from "../utils/messageSlice";

const ChatList = () => {
	const data = useSelector((store) => store.message.chatData);
	const dispatch = useDispatch();
	const [chats, setChats] = useState([]);
	const [filteredChats, setFilteredChats] = useState([]);

	const [id, setId] = useState("");
	const [isChatWindowOpen, setIsChatWindowOpen] = useState(false);
	const [messageList, setMessageList] = useState([]);
	const [searchInput, setSearchInput] = useState("");
	useEffect(() => {
		getAllChats();
	}, []);

	const getAllChats = async () => {
		// dispatch(fetchChats());
		const data = await fetch(CHAT_API);
		const json = await data.json();
		setChats(json);
		setFilteredChats(json);
	};

	console.log(data, "data");

	const handleSend = (msg) => {
		const paylaod = {
			sender: "USER",
			message: msg,
			timestamp: Date.now(),
		};
		const chat = filteredChats.filter((item) => item.id === id);
		const messageList = [...chat.messageList, paylaod];
		console.log("messageList", messageList);
	};
	const handleChatWindow = (chatId) => {
		setId(chatId);
		setIsChatWindowOpen(true);
		const messages = chats.find((chat) => chat.id === chatId);
		setMessageList(messages.messageList);
	};

	const debounce = (func, delay) => {
		let debounceTimer;
		return function () {
			const context = this;
			const args = arguments;
			clearTimeout(debounceTimer);
			debounceTimer = setTimeout(() => func.apply(this, args), delay);
		};
	};

	const handleSearch = (e) => {
		setSearchInput(e.target.value);
		const val = e.target.value.toLowerCase();
		const filterChats = chats.filter(
			(chat) =>
				chat.title.toLowerCase().includes(val) ||
				chat.orderId.toLowerCase().includes(val)
		);
		setFilteredChats(filterChats);
	};

	const optimizedSearch = debounce(handleSearch, 300);
	return (
		<div className="body">
			<div className="search-container">
				<div className="search-title">Filter By Title/ Order ID</div>
				<input
					type="text"
					placeholder="Start typing to search"
					onChange={(e) => optimizedSearch(e)}
				/>
			</div>
			<hr style={{ backgroundColor: "black", height: "3px" }} />
			<div style={{ display: "flex" }}>
				<div className="chats-container">
					{filteredChats &&
						filteredChats.length > 0 &&
						filteredChats.map((chat) => (
							<ChatCard
								key={chat.id}
								chat={chat}
								handleChatWindow={handleChatWindow}
								isChatWindowOpen={id === chat.id}
							/>
						))}
				</div>
				{isChatWindowOpen && <ChatScreen messageList={messageList} />}
			</div>
		</div>
	);
};

export default ChatList;
