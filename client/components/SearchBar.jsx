import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const searchBar = (props) => {
  return (
    <form onSubmit={props.searchArtist}>
      <TextField
        label="Search field"
        type="search"
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
      {'  '}
      <Button variant="raised" color="primary" type="submit">
        Search
      </Button>
    </form>
  )
}

export default searchBar;