const { Server } = require('ws');

const wsSettings = {
	port: 8989,
};

const connection = new Server(wsSettings);

connection
	.on('listening', () => {
		console.log('Server listening on ' + wsSettings.port);
	})
	.on('connection', (ws) => {
		console.log(Date.now() + ' New connection ');

		ws.on('message', (message) => {
			console.log(Date.now() + ' [WebsocketServer] ' + message.toString());
		}).on('close', () => {
			console.log(Date.now() + ' [WebsocketServer] Client disconnected');
		});
	});
