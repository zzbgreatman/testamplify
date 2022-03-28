import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';

import SideBar from './components/SideBar';
import Integrations from './components/Integrations';
import createFakeData from './utilities/createFakeData';

const mdTheme = createTheme();
const fakeData = createFakeData(10);

export default function IntegrationsPage(props) {
  const pagetitle= "Integrations";
  const data = props.data || fakeData;

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideBar title={pagetitle} />
        <Integrations  data={data}/>
      </Box>
    </ThemeProvider>
  );
}