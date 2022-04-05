import { useState } from 'react';
import SendMessage from './SendMessage';
import MessageLog from './MessageLog';
const ws = new WebSocket('ws://192.168.1.107:8989');
const ChatManager = () => {
	const [messageList, setMessageList] = useState([]);
	//const messageList = ['Test']; //Old solution
	ws.onmessage = ({ data }) => {
		console.log(`[WebSocket] New message: ${data}`);
		//messageList.push(e.data);  //Old solution
		setMessageList([...messageList, data]);
	};
	ws.onopen = (e) => {
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
