import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';

const searchBar = (props) => {
  return (
    <form onSubmit={props.searchArtist}>
      <TextField
        label="Search field"
        type="search"
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
      {'  '}
      <Switch 
          checked={props.deepSearch}
          onChange={props.toggleDeepSearch}
          value="deepSearch"
      /> Deep Search &nbsp;&nbsp;&nbsp;
      <Button variant="raised" color="primary" type="submit">
        Search
      </Button>

    </form>
  )
}

export default searchBar;