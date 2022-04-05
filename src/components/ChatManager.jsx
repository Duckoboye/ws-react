import { useState } from 'react';
import SendMessage from './SendMessage';
import MessageLog from './MessageLog';
const url = `ws://${process.env.REACT_APP_WS_IP}:${process.env.REACT_APP_WS_PORT}`;
const ws = new WebSocket(url);
const ChatManager = () => {
	const [messageList, setMessageList] = useState([]);
	ws.onmessage = ({ data }) => {
		console.log(`[WebSocket] New message: ${data}`);
		setMessageList([...messageList, data]);
	};
	ws.onopen = () => {
		console.log('[WebSocket] Connection established');
	};
	return (
		<section>
			<SendMessage ws={ws} />
			<MessageLog messageList={messageList} />
		</section>
	);
};

export default ChatManager;
