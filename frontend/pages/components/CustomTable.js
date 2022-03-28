import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';


export default function CustomTable(props) {
  const headers = props.headers || [];
  const values = props.values || [];

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