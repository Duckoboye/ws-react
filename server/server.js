const { Server, WebSocket } = require('ws');
const { randomUUID } = require('crypto');
require('dotenv').config();
const wsSettings = {
	port: process.env.REACT_APP_WS_PORT,
};

const connection = new Server(wsSettings);

const clients = {};
connection
	.on('listening', () => {
		console.log('Server listening on ' + wsSettings.port);
	})
	.on('connection', (ws) => {
		ws.id = randomUUID();

		console.log(`${Date.now()} [WebsocketServer] Client ${ws.id} connected`);
		ws.on('message', (message) => {
			console.log(
				Date.now() + ` [WebsocketServer] ${ws.id}: ${message.toString()}`
			);
			//TODO: Implement broadcasting to all clients.
			connection.clients.forEach((client) => {
				if (client.readyState === WebSocket.OPEN)
					client.send(`${ws.id}: ${message.toString()}`);
			});
			//ws.send(message.toString()); //Echo for testing. Remove when no longer using.
		}).on('close', () => {
			console.log(
				Date.now() + ` [WebsocketServer] Client ${ws.id} disconnected`
			);
		});
	});
