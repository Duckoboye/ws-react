import React from 'react';
import Message from './Message';
const MessageLog = ({ messageList }) => {
	console.log(messageList);
	return (
		<section>
			{messageList.map((message, index) => {
				return <Message msg={message} key={index} />;
			})}
		</section>
	);
};

export default MessageLog;
