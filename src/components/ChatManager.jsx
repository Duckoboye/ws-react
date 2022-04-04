import SendMessage from './SendMessage';
import MessageLog from './MessageLog';
const ws = new WebSocket('ws://localhost:8989');

const ChatManager = () => {
	const messageList = ['Test'];
	ws.onmessage = (e) => {
		console.log(`[WebSocket] New message: ${e.data}`);
		messageList.push(e.data);
	};
	ws.onopen = (e) => {
		console.log('WS open');
	};

	return (
		<section>
			<SendMessage ws={ws} />
			<MessageLog messageList={messageList} />
		</section>
	);
};

export default ChatManager;
