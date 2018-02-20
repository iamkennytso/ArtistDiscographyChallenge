import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const searchBar = (props) => {
  return (
    <form>
      <TextField
        hintText="Artist Search"
      />
      <RaisedButton label="Submit" type="submit" primary={true} />
    </form>
  )
}

export default searchBar;