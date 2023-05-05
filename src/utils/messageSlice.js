import { createSlice } from "@reduxjs/toolkit";
import { CHAT_API } from "./constants";

const messageSlice = createSlice({
	name: "message",
	initialState: {
		chatData: [],
		message: "",
	},
	reducers: {
		fetchChats: async (state) => {
			const data = await fetch(CHAT_API);
			const json = await data.json();
			state = { ...state, chatData: json };
		},
		sendMessageBody: (state, action) => {},
	},
});

export const { sendMessageBody, fetchChats } = messageSlice.actions;
export default messageSlice.reducer;
