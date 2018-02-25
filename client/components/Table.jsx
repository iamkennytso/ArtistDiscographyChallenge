import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table';

const table = (props) => {

  const meh = () => {
    console.log('hello')
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell > Album Art   </TableCell>
          <TableCell > 
            <TableSortLabel active={props.orderBy === 'name'} direction={props.order} onClick={()=>props.sortClick('name')}> 
              Album Name 
            </TableSortLabel>
          </TableCell>
          <TableCell > 
            <TableSortLabel active={props.orderBy === 'release'} direction={props.order} onClick={()=>props.sortClick('release')}> 
              Release Date 
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {
          props.albums.map(album => {
            let releaseDate = album.release
            return (
              <TableRow key={album.link}>
                <TableCell > <img src={album.art} /> </TableCell>
                <TableCell > <a href={album.link}>{album.name}</a> </TableCell>
                {/* Eventually want to make this table sortable by user input */}
                <TableCell > {releaseDate.getMonth()+1}/{releaseDate.getDate()}/{String(releaseDate.getFullYear()).slice(2,4)} </TableCell>
              </TableRow>
            )
          })
        }
      </TableBody>
    </Table>
  )
}

export default table;