import React from 'react';
import Message from './Message';
const MessageLog = ({ messageList }) => {
	return (
		<section className="messagelog">
			{messageList.map((message, index) => {
				return <Message msg={message} key={index} />;
			})}
		</section>
	);
};

export default MessageLog;
