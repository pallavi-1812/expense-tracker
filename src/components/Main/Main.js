import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';

const Main = () => {

    const classes = useStyles();

    const { balance } = useContext(ExpenseTrackerContext);

    return (
        <div style={{ margin: '10px' }}>
            <Card className={classes.root}>
                <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
                <CardContent>
                    <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
                    {/* <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                        Try saying: Add income for $100 in Category Salary for Monday...
                    </Typography> */}
                    <Divider />
                    <Form />
                </CardContent>
                <CardContent className={classes.cartContent}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <List />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </div>
    );
}

export default Main;