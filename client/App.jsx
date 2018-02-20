import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios'

import SearchBar from './components/SearchBar.jsx'
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      artist: 'World',
      albums: []
    }
    this.searchArtist.bind(this)
  }

  searchArtist(e) {
    e.preventDefault()
    axios.post('search', {
      searchTerm: this.state.artist
    })
      .then(payload => this.setState({albums: payload.data}))
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          Hello {this.state.artist}
          <SearchBar 
            setArtist={(artist) => this.setState({artist})} 
            searchArtist={(e) => this.searchArtist(e)}
          />
          <pre><code>{JSON.stringify(this.state.albums, null, 4)}</code></pre>
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
   <App /> ,
  document.getElementById('app')
);