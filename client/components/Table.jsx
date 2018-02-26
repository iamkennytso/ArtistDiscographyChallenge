import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow, TableSortLabel } from 'material-ui/Table';

const table = (props) => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell> Album Art   </TableCell>
          <TableCell> 
            <TableSortLabel 
              active={props.orderBy === 'name'} 
              direction={props.order} 
              onClick={()=>props.sortClick('name')}
            > 
              Album Name 
            </TableSortLabel>
          </TableCell>
          <TableCell> 
            <TableSortLabel 
              active={props.orderBy === 'release'} 
              direction={props.order} 
              onClick={()=>props.sortClick('release')}
            > 
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
                {/* the href below can be replaced with a RegEx */}
                <TableCell > <a href={album.art.slice(0,-13).concat('1920x1920bb.jpg')}> <img src={album.art} /> </a> </TableCell>
                <TableCell > <a href={album.link}>{album.name}</a> </TableCell>
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