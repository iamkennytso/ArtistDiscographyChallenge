import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import SearchBar from './components/SearchBar.jsx'
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      artist: 'World'
    }
  }

  render() {
    return(
      <MuiThemeProvider>
        <div>
          Hello {this.state.artist}
          <SearchBar />
        </div>
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(
   <App /> ,
  document.getElementById('app')
);