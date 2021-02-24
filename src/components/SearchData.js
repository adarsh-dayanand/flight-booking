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

export default function SearchData({data}) {

    const classes = useStyles();
    
    // console.log("Data", data);

    // let dd = new Date(data.dep_date);
    // let rd = new Date(data.ret_date);
    // let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // let return_month = months[rd.getMonth()];
    // let depart_month = months[dd.getMonth()];

    // let return_date = rd.getDate();
    // let depart_date = dd.getDate();

    // let return_year = rd.getFullYear();
    // let depart_year = dd.getFullYear();

    // let departDate = depart_date + " - " + depart_month + " - " + depart_year;
    // let returnDate = return_date + " - " + return_month + " - " + return_year;

    return (
        <div className="container-fluid full-width">
            {/* Head Section */}
            {
                (() => {
                    
                    if(data.length <= 1 || data === undefined || data.origin === '' || data.origin === null || data.origin === undefined){
                        return <div className="h2 text-danger"> Please search for the flight</div>;
                    }
                    else{
                        return (
                            <div>
                                <div className="h1 text-center font-weight-bold p-3 mb-2 bg-light text-dark" style={{width: '100%'}}>
                                    {data.origin} &gt; {data.destination}
                                </div>

                                <div className="h6 text-right">
                                Depart : {data.dep_date} <br/>
                                Return : {data.ret_date}
                                   
                                </div>
                                <div>
                                    <hr/>
                                </div>

                                {/* Body */}

                                {
                                    (()=>{
                                        // If price / fare is not mentioned
                                        if((data.price_range === '' || data.price_range < 1200) && !data.return_flight){
                                            
                                            return(
                                                <div>
                                                    {
                                                        
                                                        dataset.filter((result) => {
                                                           
                                                            if(data.origin === result.origin && data.destination === result.destination && result.seat_available && data.dep_date === result.dep_date){
                                                                return result;
                                                            }
                                                            return '';
                                                        }).map((data, key) => {
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
                                                                                <div className="col text-muted">{data.flight_no}</div>
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
                                        }

                                        // For filtering the price
                                        else if(data.price_range > 1200 && !data.return_flight){
                                            return(
                                                <div>
                                                    {
                                                        dataset.filter((result) => {
                                                            
                                                            if(data.origin === result.origin && data.destination === result.destination && data.price_range > result.fare && result.seat_available && data.dep_date === result.dep_date){
                                                                return result;
                                                            }
                                                            return '';
                                                        }).map((data, key) => {
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
                                                                                <div className="col text-muted">{data.flight_no}</div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-12" style={{width: '100%'}}>
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
                                        }

                                        // for return flights
                                        
                                        else if((data.price_range === '' || data.price_range < 1200) && data.return_flight){
                                            
                                            return(
                                                <div>
                                                    {
                                                        dataset.filter((result) => {
                                                            if(data.destination === result.origin && data.origin === result.destination  && result.seat_available && data.ret_date === result.dep_date){
                                                                return result;
                                                            }
                                                            return '';
                                                        }).map((data, key) => {
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
                                                                                <div className="col text-muted">{data.flight_no}</div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-12" style={{width: '100%'}}>
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
                                        }else if(data.price_range > 1200 && data.return_flight){
                                            return(
                                                <div>
                                                    {
                                                        dataset.filter((result) => {
                                                            if(data.destination === result.origin && data.origin === result.destination  && result.seat_available && data.price_range > result.fare && data.ret_date === result.dep_date){
                                                                return result;
                                                            }
                                                            return '';
                                                        }).map((data, key) => {
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
                                                                                <div className="col text-muted">{data.flight_no}</div>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="col-12" style={{width: '100%'}}>
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
                                        }

                                    })()
                                }

                            </div>
                        );
                    }
                })()
            }
  
        </div>
    );
}
 