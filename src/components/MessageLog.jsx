import React from 'react';
import Message from './Message';
const MessageLog = () => {
	const messages = [
		'Hello',
		'testing',
		'hohoho so quirky',
		'bababooey',
		'stinky boy go sleep',
	];

	return (
		<section>
			{messages.map((message, index) => {
				return <Message msg={message} key={index} />;
			})}
		</section>
	);
};

export default MessageLog;
