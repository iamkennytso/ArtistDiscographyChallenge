import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Switch from 'material-ui/Switch';
import Tooltip from 'material-ui/Tooltip';

const searchBar = (props) => {
  return (
    <form onSubmit={props.searchArtist}>
      <TextField
        label="Search field"
        type="search"
        onChange={(e) => props.setSearchTerm(e.target.value)}
      />
      {'  '}
      <Tooltip title="Longer to load, more accurate results." placement="top">
        <Switch 
            checked={props.deepSearch}
            onChange={props.toggleDeepSearch}
            value="deepSearch"
        />
      </Tooltip> 
      Deep Search &nbsp;&nbsp;&nbsp;
      <Button variant="raised" color="primary" type="submit">
        Search
      </Button>

    </form>
  )
}

export default searchBar;