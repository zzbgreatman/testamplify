import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function FilesTable(props) {
  const properties = ['Id', 'Name', 'Location', 'InitDate', 'Expiration', 'Amount', ''];
  const headers = [];
  const values = [];
  const rows = props.data || [];

  properties.forEach((property) => {
    headers.push(<TableCell key={property} >{property} </TableCell>)
  })

  rows.map((e) => {
    values.push(
      <TableRow key={e.id + 300}>
        <TableCell>{e.id}</TableCell>
        <TableCell>{e.name}</TableCell>
        <TableCell>{e.loc}</TableCell>
        <TableCell>{e.init}</TableCell>
        <TableCell>{e.expi}</TableCell>
        <TableCell>{`${e.amount}kb`}</TableCell>
        <TableCell> <a href='/'> <MoreVertIcon /> </a> </TableCell>
      </TableRow>
    )
  })

  return (
    <React.Fragment>
      <Title>{props.tablename}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {headers}
          </TableRow>
        </TableHead>
        <TableBody>
          {values}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}