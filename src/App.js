import logo from './logo.svg';
import './App.css';
import ChatManager from './components/ChatManager';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>QuackChat™ 2.0</h1>

				<img src={logo} className="App-logo" alt="logo" />
				<ChatManager></ChatManager>
			</header>
		</div>
	);
}

export default App;
