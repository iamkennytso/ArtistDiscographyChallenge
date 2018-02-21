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
      data: {albums:[]}
    }
    this.searchArtist.bind(this)
  }

  searchArtist(e) {
    e.preventDefault()
    axios.post('search', {
      searchTerm: this.state.searchTerm
    })
      .then(payload => this.setState({data: payload.data}))
  }

  render() {
    return(
        <div>
          <h1>Discographify</h1>
          <SearchBar 
            setSearchTerm={(searchTerm) => this.setState({searchTerm})} 
            searchArtist={(e) => this.searchArtist(e)}
          />
          {this.state.data.albums[0] ? (
            <div>
              <h2>Discography for: <a href={this.state.data.link} >{this.state.data.name} </a></h2>
              <Table albums={this.state.data.albums} /> 
            </div>
            ) : <h2>Search for an artist with the search bar above!</h2>
          }
        </div>
    )
  }
}

ReactDOM.render(
   <App /> ,
  document.getElementById('app')
);