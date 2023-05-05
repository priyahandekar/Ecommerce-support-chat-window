import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./utils/messageSlice";

const store = configureStore({
	reducer: { message: messageSlice },
});

export default store;
