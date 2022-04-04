import logo from './logo.svg';
import './App.css';
import SendMessage from './SendMessage';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<SendMessage></SendMessage>
			</header>
		</div>
	);
}

export default App;
