const express = require('express');

const app = express();
const port = Number(process.env.PORT || 8080);

app.get('/', (_request, response) => {
  response.json({ message: 'Docker lab Express service is running.' });
});

app.get('/health', (_request, response) => {
  response.status(200).json({ status: 'ok' });
});

const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});

function shutdown(signal) {
  console.log(`Received ${signal}; shutting down.`);
  server.close(() => process.exit(0));
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
