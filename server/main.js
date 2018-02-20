const express = require('express');
const bodyParser = require('body-parser')
let app = express();
let port = process.env.PORT || 1337

app.use(express.static(__dirname + '/../public'));

app.listen(port, function() {
	console.log(`               Your Application is Ready.               `);
	console.log('                Open a browser and go to:               ')
	console.log(`                    +--------------+                    `)
	console.log(`                    |localhost:${port}|                    `);
	console.log(`                    +--------------+                    `)
})