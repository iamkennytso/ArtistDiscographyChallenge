import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const table = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell style={{ 'fontWeight': 'bold' }}> Album Art  </TableCell>
          <TableCell style={{ 'fontWeight': 'bold' }}> Album Name </ TableCell>
          {/* I wanted to sort by release dates, but the itunes API release dates are very inaccurate? */}
          {/* <TableCell style={{ 'fontWeight': 'bold' }}> Release Date </ TableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {
          props.albums.map(album => {
            return (
              <TableRow key={album.name}>
                <TableCell > <img src={album.art} /> </TableCell>
                <TableCell > <a href={album.link}>{album.name}</a> </TableCell>
                {/* Eventually want to make this table sortable by either title or release date */}
                {/* <TableCell > {album.release} </TableCell> */}
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

export default table;