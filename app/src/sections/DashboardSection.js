import React from 'react';
import { Grid, Card, Box, Typography } from "@mui/material";

export default function DashboardSection () {
    return (
         <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <Card>
                    <Box p={2}>
                        <Typography variant="h6">Card 1</Typography>
                    </Box>
                </Card>
            </Grid>
            <Grid item xs={12} md={6}>
                <Card>
                    <Box p={2}>
                        <Typography variant="h6">Card 2</Typography>
                    </Box>
                </Card>
            </Grid>
         </Grid>
    )
};

