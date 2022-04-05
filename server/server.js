const { Server, OPEN } = require('ws');
const { randomUUID } = require('crypto');
const wsSettings = {
	port: 8989,
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
				if (client.readyState === OPEN) client.send(message.toString());
			});
			//ws.send(message.toString()); //Echo for testing. Remove when no longer using.
		}).on('close', () => {
			console.log(
				Date.now() + ` [WebsocketServer] Client ${ws.id} disconnected`
			);
		});
	});
