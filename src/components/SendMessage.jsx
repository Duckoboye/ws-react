import { useState } from 'react';

const SendMessage = ({ ws }) => {
	const [messageState, setMessageState] = useState('');

	const handleMessage = (message) => {
		console.log(`[WebSocket] New message: ${message}`);
	};
	ws.onmessage = (e) => {
		handleMessage(e.data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		ws.send(messageState);
	};
	const handleInput = (e) => {
		setMessageState(e.target.value);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="messageInput"></label>
			<input type="text" name="messageInput" onChange={handleInput} />
			<button type="submit">Send!</button>
		</form>
	);
};

export default SendMessage;
