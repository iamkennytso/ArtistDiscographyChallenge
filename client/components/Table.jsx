import React from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow} from 'material-ui/Table';

class table extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      orderBy: 'release',
      order: 'dec'
    }
  }
  
  render() {
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
            this.props.albums.map(album => {
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
}

export default table;