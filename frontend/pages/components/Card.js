import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function Card(props) {
  const today = new Date(Date.now());
  const p =  (100 * props.failtask  / props.alltask).toFixed(2);

  return (
    <React.Fragment>
      <Title>{props.title || "Title"}</Title>
      <Typography component="p" variant="h4">
        {props.failtask || 0} / {props.alltask || 0} 
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {p}% Fail
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {today.toDateString()}
      </Typography>
      <div>
        <Link color="primary" href="/integrationspage">
          View detail
        </Link>
      </div>
    </React.Fragment>
  );
}