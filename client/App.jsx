import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      artist: 'World'
    }
  }

  render() {
    return(
      <div>
        Hello {this.state.artist}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);