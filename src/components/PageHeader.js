import React from 'react';
import { Paper, Card, Typography, makeStyles,  } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    root:{
        backgroundColor: '#fdfdfd'
    },
    pageHeader:{
        padding: theme.spacing(4),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon:{
        display: 'inline-block',
        padding: theme.spacing(2),
        color: '#3c44b1'
    },
    pageTitle:{
        paddingLeft: theme.spacing(4)
    }

}));


export default function PageHeader(props) {
    const classes = useStyles();
    
    return (
       <Paper elevation={0} square className={classes.root}>
           <div className={classes.pageHeader}>
                <Card className={classes.pageIcon}>
                    Logo
                </Card>
                <div className={classes.pageTitle}>
                    <Typography variant="h6" component="div"> Flight Ticket Booking </Typography>

                    <Typography variant="subtitle2" component="div"> Internship Assignment </Typography>
                </div>
           </div>
       </Paper>
    )
}
