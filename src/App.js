import "./App.css";
import ChatList from "./components/ChatList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<ChatList />
			</div>
		</Provider>
	);
}

export default App;
