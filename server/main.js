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

const formatArtistData = (artist, payload, deep) => {
  payload.data.results
  .filter(album => {
    return (
      //avoids singles. Assumption: albums are more than $2, and more than 5 tracks. 
      album.collectionPrice > 2 
      && (album.trackCount > 5)
      //avoids duplicate albums. Assumption: there's always a cleaned up version of an album.
      && (album.collectionExplicitness !== 'explicit') 
      //this isn't needed for iTunes lookup
      && (deep ? true: album.artistName === artist.name)
    )}
  )
  .forEach((album) => {
    let obj = {}
    obj.name = album.collectionName
    obj.art = album.artworkUrl100
    obj.release = album.releaseDate
    obj.link = album.collectionViewUrl
    artist.albums.push(obj)
  })
  return artist
}

app.post('/search', (req, res) => {
  const artist = {albums:[]}
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
      //'deep search' is initiated by user selection on a toggle switch
      //'deep search' is a search using iTunes lookup instead of search
      //takes longer because of second API call, but more accurate
      if (!req.body.deepSearch) res.send(formatArtistData(artist, payload))
      else {
        axios.get('https://itunes.apple.com/lookup', {
          params: {
            id: payload.data.results[0].artistId,
            entity:'album',
            limit: '200' 
          }
        })
          .then(payload2 => res.send(formatArtistData(artist, payload2, true)))
      }
    })
    .catch(err => error.log('Back end Search Error', err)) 
})