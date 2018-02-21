import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const table = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell style={{ 'fontWeight': 'bold' }}> Album Art  </TableCell>
          <TableCell style={{ 'fontWeight': 'bold' }}> Album Name </ TableCell>
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