const express = require('express');
const bodyParser = require('body-parser')
//decision to use axios for promises
const axios = require('axios')
const compress = require('compression')
let app = express();
let port = process.env.PORT || 1337

app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());
//for compression
app.use(compress());
app.listen(port, function() {
	console.log(`               Your Application is Ready.               `);
	console.log('                Open a browser and go to:               ')
	console.log(`                    +--------------+                    `)
	console.log(`                    |localhost:${port}|                    `);
	console.log(`                    +--------------+                    `)
})

app.post('/search', (req, res) => {
  const artist = {albums:[]}
  console.log(req.body.searchTerm)
  //start API call
  axios.get('https://itunes.apple.com/search', {
    params: { 
      term: req.body.searchTerm,
      media: 'music',
      entity: 'album',
      attribute: 'artistTerm',
      limit: '200' 
    },
  })
    .then(payload => {
      artist.name = payload.data.results[0].artistName
      artist.link = payload.data.results[0].artistViewUrl
      // axios.get('https://itunes.apple.com/lookup', {
      //   params: {
      //     id: payload.data.results[0].artistId,
      //     entity:'album',
      //     limit: '200' 
      //   }
      // })
      //   .then(payload2 => {
      //     payload2.data.results
          payload.data.results
          //lines 37-45 & 65, without 46 and 55, includes collab albums, like Kanye's Watch The Throne, but requires another API call.
          //eventually, there should be an option for client to choose if collabs are wanted
            .filter(album => {
              return (
                //avoids singles. Assumption: full albums are always more than $2. 
                album.collectionPrice > 2 
                //to avoid duplicate albums. Assumption: there's always a cleaned up version of an album.
                && (album.collectionExplicitness !== 'explicit') 
                && album.artistName === artist.name
              )}
            )
            .forEach((album) => {
              console.log(album)
              let obj = {}
              obj.name = album.collectionName
              obj.art = album.artworkUrl100
              // obj.release = album.releaseDate
              obj.link = album.collectionViewUrl
              artist.albums.push(obj)
            })
          res.send(artist)
        }) 
    // })
})