import SendMessage from './SendMessage';
import MessageLog from './MessageLog';
const ws = new WebSocket('ws://localhost:8989');

const ChatManager = () => {
	const handleMessage = (message) => {
		console.log(`[WebSocket] New message: ${message}`);
	};
	ws.onmessage = (e) => {
		handleMessage(e.data);
	};
	ws.onopen = (e) => {
		console.log('WS open');
	};

	return (
		<section>
			<SendMessage ws={ws} />
			<MessageLog />
		</section>
	);
};

export default ChatManager;
