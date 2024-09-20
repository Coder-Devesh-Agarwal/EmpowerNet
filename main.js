const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const colors = require('colors/safe');

// Create a new client instance
const client = new Client();

// Start your client
client.initialize();

client.on('loading_screen', (percent, message) => {
  console.log('LOADING SCREEN', percent, message);
});

// When the client received QR-Code
client.on('qr', (qr) => {
  // NOTE: This event will not be fired if a session is specified.
  qrcode.generate(qr, { small: true });
  console.log(colors.green('QR RECEIVED'));
});

client.on('authenticated', () => {
  console.log(colors.green('AUTHENTICATED'));
});

client.on('auth_failure', (msg) => {
  // Fired if session restore was unsuccessful
  console.error(colors.green('AUTHENTICATION FAILURE'), msg);
});

// When the client is ready, run this code (only once)
client.on('ready', () => {
  console.log(colors.green('EMPOWER-NET CLIENT IS READY'));
});
