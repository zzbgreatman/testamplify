
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/orgs/delta-gen">
          Delta-gen
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }