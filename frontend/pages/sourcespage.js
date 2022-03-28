import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import Sources from './components/Sources';
import SideBar from './components/SideBar';
import createFakeData from './utilities/createFakeData';

const mdTheme = createTheme();
const fakeData = createFakeData(30);

export default function SourcesPage(props) {
  const pagetitle= "Sources";
  const data = props.data || fakeData;

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideBar title={pagetitle} />
        <Sources data={data} />
      </Box>
    </ThemeProvider>
  );
}