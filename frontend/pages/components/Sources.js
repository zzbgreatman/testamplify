import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import CustomTable from './CustomTable';
import Footer from './Footer';

export default function Sources(props) {
  const properties = ['Id', 'Name', 'Location', 'InitDate', 'Expiration', 'Amount', ''];
  const headers = [];
  const values = [];
  const rows = props.data || [];

  properties.forEach((property) => {
    headers.push(<TableCell key={property} >{property} </TableCell>)
  })

  rows.map((e) => {
    let path = "/file/" + e.name.slice(0, -4).toString();
    values.push(
      <TableRow key={e.id + 300}>
        <TableCell>{e.id}</TableCell>
        <TableCell>{e.name}</TableCell>
        <TableCell>{e.loc}</TableCell>
        <TableCell>{e.init}</TableCell>
        <TableCell>{e.expi}</TableCell>
        <TableCell>{`${e.amount}kb`}</TableCell>
        <TableCell><Link href={path} data={e} ><MoreVertIcon /></Link></TableCell>
      </TableRow>
    )
  })

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