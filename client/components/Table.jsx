import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const table = (props) => {
  return (
    <Table>
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow>
          <TableHeaderColumn style={{ 'fontWeight': 'bold' }}>  </TableHeaderColumn>
          <TableHeaderColumn> Album Art </ TableHeaderColumn>
          <TableHeaderColumn> Album Name </ TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false} showRowHover={true} >
        {
          props.albums.map(album => {
            return (
              <TableRow key={album.name}>
                <TableRowColumn > <img src={album.art} /> </TableRowColumn>
                <TableRowColumn > {album.name} </TableRowColumn>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

export default table;