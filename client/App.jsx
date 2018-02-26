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
      orderBy: 'release',
      order: 'desc',
      deepSearch: false
    }
    this.searchArtist = this.searchArtist.bind(this)
    this.sortClick = this.sortClick.bind(this)
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
        //set state, then sort by release
        this.setState({data: payload.data}, () => this.sortClick('release', 'desc'))
      })
      .catch(err => console.error('Search Artist Error', err))
  }

  sortClick(prop, ord) {
    const orderBy = prop
    const order = ord 
      ? ord
      : this.state.orderBy = prop && this.state.order === 'desc'
        ? 'asc'
        : 'desc'
    order === 'desc'
      this.state.data.albums.sort((a, b) => b[orderBy] < a[orderBy] ? -1 : 1)
    this.setState({ order, orderBy })
  }

  render() {
    return(
        <div>
          <h1>Discographify</h1>
          <SearchBar 
            setSearchTerm={(searchTerm) => this.setState({searchTerm})} 
            searchArtist={(e) => this.searchArtist(e)}
            deepSearch={this.state.deepSearch}
            toggleDeepSearch={() => this.setState({deepSearch:!this.state.deepSearch})}
          />
          {/* ternary statement to render bottom portion of page */}
          {this.state.data.albums[0] 
            ? 
              ( 
                <div>
                  <h2>Discography for: <a href={this.state.data.link} >{this.state.data.name} </a></h2>
                  <Table 
                    albums={this.state.data.albums} 
                    orderBy={this.state.orderBy} 
                    order={this.state.order} 
                    sortClick={(prop)=>this.sortClick(prop)}
                  /> 
                </div> 
              ) 
            : <h2>Search for an artist with the search bar above!</h2>
          }
        </div>
    )
  }
}

ReactDOM.render(
   <App /> ,
  document.getElementById('app')
);