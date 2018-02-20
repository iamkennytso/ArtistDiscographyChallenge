const express = require('express');
const bodyParser = require('body-parser')
const axios = require('axios')
let app = express();
let port = process.env.PORT || 1337

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json())
app.listen(port, function() {
	console.log(`               Your Application is Ready.               `);
	console.log('                Open a browser and go to:               ')
	console.log(`                    +--------------+                    `)
	console.log(`                    |localhost:${port}|                    `);
	console.log(`                    +--------------+                    `)
})

app.post('/search', (req, res) => {
  const obj = {}
  axios.get('https://itunes.apple.com/search', {
    params: { 
      term: req.body.searchTerm,
      media: 'music',
      entity: 'album',
      attribute: 'artistTerm',
      limit: '1' 
    },
  })
    .then(payload => {
      axios.get('https://itunes.apple.com/lookup', {
        params: {
          id: payload.data.results[0].artistId,
          entity:'album'
        }
      })
        .then(payload2 => {
          payload2.data.results
            .filter(meh => meh.collectionPrice > 2)
            .forEach((album) => obj[album.collectionName] = album.artworkUrl100)
          res.send(obj)
        })  
    })
})