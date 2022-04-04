import { useState } from 'react';
import SendMessage from './SendMessage';
const ChatManager = () => {
	const ws = new WebSocket('ws://localhost:8989');

	ws.onopen = (e) => {
		console.log('WS open');
	};

	return (
		<div>
			<SendMessage ws={ws} />
		</div>
	);
};

export default ChatManager;
