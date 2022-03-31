import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import CustomTable from './CustomTable';
import Footer from './Footer';

export default function Snapshots(props) {
  const properties = [ 'Name', 'Location', 'Time', 'Amount', 'Info', ''];
  const rows = props.data || [];
  const headers = [];
  const values = [];

  properties.forEach((data) => {
    headers.push(<TableCell key={data}>{data} </TableCell>)
  })

  rows.map((row) => (
    row.children.forEach((e) => {
      let path = "/file/" + row.name.slice(0, -4).toString() + "/" + e.id;
        values.push(
          <TableRow key={e.id}>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.loc}</TableCell>
            <TableCell>{e.init}</TableCell>
            <TableCell>{`${e.amount}kb`}</TableCell>
            <TableCell><Link href={path} ><MoreHorizIcon /></Link></TableCell>
          </TableRow>
        )
    })
  ))

  return (
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Tasks */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <CustomTable headers={headers} values={values} />
            </Paper>
          </Grid>
        </Grid>
        <Footer sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}