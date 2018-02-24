import React from 'react';
import ReactDOM from 'react-dom';
//decision to use axios for promises
import axios from 'axios'

import SearchBar from './components/SearchBar.jsx'
import Table from './components/Table.jsx'
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      data: {albums:[]},
      deepSearch:false
    }
    this.searchArtist.bind(this)
  }

  //backend call to search apple API and set data
  searchArtist(e) {
    e.preventDefault()
    axios.post('search', {
      searchTerm: this.state.searchTerm,
      deepSearch: this.state.deepSearch
    })
      .then(payload => {
        //convert release dates to date objects
        for(let i = 0; i < payload.data.albums.length; i++){
          payload.data.albums[i].release = new Date(payload.data.albums[i].release)
        }
        //default sort by date
        payload.data.albums.sort((album1, album2) => album2.release - album1.release)
        this.setState({data: payload.data})
      })
      .catch(err => console.error('Search Artist Error', err))
  }

  render() {
    return(
        <div>
          <h1>Discographify</h1>
          <SearchBar 
            setSearchTerm={(searchTerm) => this.setState({searchTerm})} 
            searchArtist={(e) => this.searchArtist(e)}
            deepSearch={this.state.deepSearch}
            toggleDeepSearch={()=>this.setState({deepSearch:!this.state.deepSearch})}
          />
          {/* ternary statement to render bottom portion of page */}
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