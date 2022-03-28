import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router'

import { Box, CssBaseline } from '@mui/material/';

import SingleBox from '../../components/SingleBox';
import SideBar from '../../components/SideBar';
import createFakeData from '../../utilities/createFakeData';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const mdTheme = createTheme();

export default function Snaps(props) {
  const router = useRouter()
  const { id, sid } = router.query
  
  const data = props.data || createFakeData(1);
  const properties = ['Id', 'Name', 'Location', 'InitDate', 'Expiration', 'Amount', ''];
  const headers = props.headers || [];
  const values = props.values || [];
  const title = 'Tasks';

  properties.forEach((data) => {
    headers.push(<TableCell key={data}>{data} </TableCell>)
  })

  data.map((row) => (
      row.snaps.forEach((e) => {
        values.push(
          <TableRow key={e.id}>
            <TableCell>{e.id}</TableCell>
            <TableCell>{e.name}</TableCell>
            <TableCell>{e.loc}</TableCell>
            <TableCell>{e.init}</TableCell>
            <TableCell>{e.expi}</TableCell>
            <TableCell>{`${e.amount}kb`}</TableCell>
          </TableRow>
        )
      })
    ))

  return (
    <ThemeProvider theme={mdTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <SideBar title={sid} />
      <SingleBox title={title} headers={headers} values={values}/>
    </Box>
    </ThemeProvider>)
}