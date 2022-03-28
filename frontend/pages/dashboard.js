import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Overview from './components/Overview';
import SideBar from './components/SideBar';
import createFakeData from './utilities/createFakeData'

const mdTheme = createTheme();
const fakeData = createFakeData(50);

export default function Dashboard(props) {
  const pagetitle= "Overview";
  const data = props.data || fakeData;
  
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideBar title={pagetitle}/>
        <Overview data={data}/>
      </Box>
    </ThemeProvider>
  );
}