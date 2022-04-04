import { useState } from 'react';

const SendMessage = () => {
	const [messageState, setMessageState] = useState('');
	const ws = new WebSocket('ws://localhost:8989');

	ws.onopen = (e) => {
		console.log('open');
	};
	const handleMessage = (e) => {
		console.log('New message');
		console.log(e);
	};
	ws.onmessage = (e) => {
		handleMessage(e.data);
	};
	const sendWSMessage = (e) => {
		ws.send(e);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		sendWSMessage(messageState);
		console.log('aaa');
		console.log(messageState);
	};
	const handleInput = (e) => {
		//console.log(e);
		setMessageState(e.target.value);
		console.log(messageState);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="messageInput"></label>
				<input type="text" name="messageInput" onChange={handleInput} />
				<button type="submit">Send!</button>
			</form>
		</div>
	);
};

export default SendMessage;
