import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';


export default function Card(props) {
  const today = new Date(Date.now());
  const last = new Date(Date.now() - 86400 * 7 * 1000);

  const p =  (100 * props.failtask  / props.alltask).toFixed(2);
  const sp =  (100 - p).toFixed(2);

  return (
    <React.Fragment>
      <Title>{props.title || "Title"}</Title>
      <Typography component="p" variant="h4">
        From {last.toDateString()} 
      </Typography>
      <Typography color="red" sx={{ flex: 1 }}>
        {p}% Fail
      </Typography>
      <Typography color="green" sx={{ flex: 1 }}>
        {sp}% Success
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {parseInt(props.failtask / 7) || 0} / {parseInt(props.alltask / 7) || 0} 
      </Typography>
      <div>
        <Link color="primary" href="/integrationspage">
          View detail
        </Link>
      </div>
    </React.Fragment>
  );
}