var env = require('node-env-file');
env('.env');

console.log(process.env['MQTT_HOST']);
console.log(process.env['MQTT_USER']);
console.log(process.env['MQTT_PASS']);
console.log(process.env['AUTH_TOKEN']);
console.log(process.env);
