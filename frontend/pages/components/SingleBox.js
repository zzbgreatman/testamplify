import * as React from 'react';
import { useState } from 'react';

import { Box, Toolbar, Container, Grid, Paper, Card } from '@mui/material/';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Footer from './Footer'

export default function SingleBox(props) {
    const title = props.title || "Title";
    const headers = props.headers || [];
    const values = props.values || [];
    const actionId = props.actionId || [];
    console.log(actionId);

    const handleCreate = (e) => {
        console.log(e);
    };
    const handleCompare = (e1, e2) => {
        console.log(e1,e2);
    };    
    const handleDelete = (e) => {
        console.log(e);
    };
    const handleSetting = (e) => {
        console.log(e);
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
                    {/* Recent Tasks */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                                       {title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    </Typography>
                                    <Typography variant="body2">
                                       {headers}

                                       {values}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" onClick={handleSetting} value={actionId}>Setting</Button>
                                    <Button size="small" onClick={handleCompare} value={actionId}>Compare</Button>
                                    <Button size="small" onClick={handleCreate} value={actionId}>Create</Button>
                                    <Button size="small" onClick={handleDelete} value={actionId}>Delete</Button>
                                </CardActions>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
                <Footer sx={{ pt: 4 }} />
            </Container>
        </Box>
    );
}