import React from 'react';
import { Button, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { dataset } from '../assets/dataset';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
      formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
      },
    },
}));

export default function ViewFlights() {

    const classes = useStyles();

    return (
        <div className="container-fluid full-width">
            {/* Head Section */}
     
            <div>

                {/* Body */}

                {
                    (()=>{
                            
                        return(
                            <div>
                                {     
                                    dataset.map((data, key) => {
                                        return(
                                            <div key={key}>
                                                <div className="full-width mt-3 mr-4 fullWidth">

                                                    <Card className={classes.root} variant="outlined" style={{width: '100%'}}>
                                                        <div className="row">
                                                            <div className="col h4 text-left p-2">
                                                                ₹ {data.fare} 
                                                            </div>
                                                            <hr/>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col h5 my-2 text-left">
                                                                {data.origin} -&gt; {data.destination} <br/>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12">
                                                                Departure Time : <br/> <b>{data.dep_date} - {data.dep_time}</b> <br/> <br/>
                                                            </div>
                                                            <div className="col-12">
                                                                Arrival Time : <br/> <b>{data.dep_date} - {data.arr_time}</b>
                                                            </div>
                                                        </div>

                                                        <div className="row">
                                                            <div className="col-sm-12 custom-button">
                                                                <Button variant="contained" color="primary" onClick={()=> alert("Ticket Booked")}>
                                                                    Book Flight
                                                                </Button> 
                                                            </div>                                                                               
                                                        </div>
                                                        
                                                    </Card>

                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        );
                    
                    })()
                }

            </div>
  
        </div>
    );
}
