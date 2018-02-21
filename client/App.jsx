import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'

import SearchBar from './components/SearchBar.jsx'
import Table from './components/Table.jsx'
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 'World',
      albums: []
    }
    this.searchArtist.bind(this)
  }

  searchArtist(e) {
    e.preventDefault()
    axios.post('search', {
      searchTerm: this.state.searchTerm
    })
      .then(payload => this.setState({albums: payload.data}))
  }

  render() {
    return(
        <div>
          <SearchBar 
            setSearchTerm={(searchTerm) => this.setState({searchTerm})} 
            searchArtist={(e) => this.searchArtist(e)}
          />
          <Table albums={this.state.albums} />
          <pre><code>{JSON.stringify(this.state.albums, null, 4)}</code></pre>
        </div>
    )
  }
}

ReactDOM.render(
   <App /> ,
  document.getElementById('app')
);