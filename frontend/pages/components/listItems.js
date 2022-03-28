import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import DashboardIcon from '@mui/icons-material/Dashboard';
import LayersIcon from '@mui/icons-material/Layers';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SettingsIcon from '@mui/icons-material/Settings';
import SourceIcon from '@mui/icons-material/Source';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <a href="/dashboard">
        <ListItemText primary="Overview" />
      </a>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <SourceIcon />
      </ListItemIcon>
      <a href="/sourcespage">
        <ListItemText primary="Sources" />
      </a>
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <FileCopyIcon />
      </ListItemIcon>
      <a href="/snapshotspage">
        <ListItemText primary="Snapshots" />
      </a>    
      </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <a href="/integrationspage">
        <ListItemText primary="Integrations" />
      </a> 
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <a href="/">
        <ListItemText primary="Setting" />
      </a>
    </ListItemButton>
  </React.Fragment>
);