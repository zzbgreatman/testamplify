
import * as React from 'react';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

import { Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import Card from './Card';
import CustomTable from './CustomTable'

import Footer from './Footer';

export default function Overview(props) {
    const properties = ['Name', 'Location', 'Time', 'Amount', 'Setting'] || [];
    const headers = [];
    const values = [];
    const rows = props.data || [];
    const title = "Overview";

    properties.forEach((property) => {
        headers.push(<TableCell key={property} >{property} </TableCell>)
    })

    rows.map((e) => {
        let link = "/file/" + e.name.slice(0, -4).toString();
        values.push(
            <TableRow key={e.id}>
                <TableCell>{e.name}</TableCell>
                <TableCell>{e.loc}</TableCell>
                <TableCell>{e.init}</TableCell>
                <TableCell>{`${e.amount}kb`}</TableCell>
                <TableCell> <Link href={link} data={e} > <MoreVertIcon /> </Link> </TableCell>
            </TableRow>
        )
    })

    let failtask = 0;
    let alltask = 0;
    rows.forEach(element => {
        element.children.forEach(e => {
            if (e.status != "success") {
                failtask++;
            }
            alltask++;
        })
    });

    const sx = {
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 240,
    };

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
                    <Grid item xs={12} md={6} lg={6}>
                        <Paper sx={sx}>
                            <Card title={title} failtask={failtask} alltask={alltask} />
                        </Paper>
                    </Grid>
                    {/* Recent Deposits */}
                    {/* <Grid item xs={12} md={6} lg={6}>
                        <Paper sx={sx}>
                      
                        </Paper>
                    </Grid> */}
                    {/* Recent Tasks */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <CustomTable headers={headers} values={values.slice(0, 5)} />
                            <Link color="primary" href="/sourcespage" sx={{ mt: 3 }}>
                                See more sources
                            </Link>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer sx={{ pt: 4 }} />
            </Container>
        </Box>
    );
}