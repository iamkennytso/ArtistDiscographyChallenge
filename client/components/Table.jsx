import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const table = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell style={{ 'fontWeight': 'bold' }}> Album Art  </TableCell>
          <TableCell style={{ 'fontWeight': 'bold' }}> Album Name </ TableCell>
          <TableCell style={{ 'fontWeight': 'bold' }}> Release Date </ TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          props.albums.map(album => {
            return (
              <TableRow key={album.link}>
                <TableCell > <img src={album.art} /> </TableCell>
                <TableCell > <a href={album.link}>{album.name}</a> </TableCell>
                {/* Eventually want to make this table sortable by user input */}
                <TableCell > {album.release.getMonth()+1}/{album.release.getDate()}/{String(album.release.getFullYear()).slice(2,4)} </TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

export default table;