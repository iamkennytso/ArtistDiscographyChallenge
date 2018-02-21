import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const searchBar = (props) => {
  return (
    <form onSubmit={props.searchArtist}>
      <TextField
        hintText="Artist Search"
        onChange={(e, val) => props.setSearchTerm(val)}
      />
      <RaisedButton label="Search" type="submit" primary={true} />
    </form>
  )
}

export default searchBar;