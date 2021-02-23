import React from 'react';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, TextField, AppBar, Tabs, Tab, Typography, Button, Card, CardContent, Slider, InputLabel, } from '@material-ui/core';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            className="fullWidth"
            width="100%"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
        {value === index && (
            <Box p={2}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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

export default function SideMenu(props) {
    const [value, setValue] = React.useState(0);

    const [data, setData] = React.useState({
        origin: '',
        destination: '',
        dep_date: '',
        ret_date: '',
        passengers: '',
        price_range: '',
        return_flight: false,
    });

    const {origin, destination, dep_date, ret_date, passengers } = data;

    const classes = useStyles();

    // for tab change
    const handleChange = (event, newValue) => {
        setValue(newValue);
        let ret_flight = false;

        if(newValue === 1){
            ret_flight = true;
        }
        
        setData({...data, return_flight: ret_flight})

    };

    // for form field
    const handleFormChange = name => event => {
        
        setData({
            ...data, [name]: event.target.value
        });
    }

    //On Submit -> Insert to database
    const onSubmit = event => {
        event.preventDefault();

        // Insert operation

        props.setData(data);

    }

    const travelForm = () => (
        <div className="full-width col-12">

            <div className="row">
                <form noValidate autoComplete="off" className={classes.root}>
                    <div className="form-group">
                        <TextField id="standard-basic" label="Enter origin city" type="text" value={origin} onChange={handleFormChange('origin')} fullWidth required/>
                    </div>
                    <div className="form-group">
                        <TextField id="standard-basic" label="Enter desination city" value={destination} onChange={handleFormChange('destination')} fullWidth required/>
                    </div>
                    <div className="form-group">
                    <TextField
                        id="standard-basic"
                        label="Departure Date"
                        type="date"
                        value={dep_date}
                        fullWidth
                        onChange={handleFormChange('dep_date')}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </div>

                    {/* <div className="form-group">
                    <TextField
                        id="standard-basic"
                        label="Return Date"
                        type="date"
                        value={ret_date}
                        fullWidth
                        onChange={handleFormChange('ret_date')}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    </div> */}

                    <div className="form-group">
                    <InputLabel id="passengers">Passengers</InputLabel>
                        <select className="form-control" id="passengers" value={passengers} onChange={handleFormChange('passengers')}>
                            <option>Select</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="full-width mt-3 fullWidth" style={{width: '100%'}}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography id="discrete-slider" gutterBottom>
                                        Fare Range
                                    </Typography>

                                    <Slider
                                        width="100%"
                                        defaultValue={1000}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={1000}
                                        marks
                                        required
                                        min={1000}
                                        max={11000}
                                        onChange={(e, v) => setData({...data, price_range: v})}
                                        valueLabelDisplay="on"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                        <Button variant="contained" color="primary" onClick={onSubmit}>
                            Search
                        </Button>
                    </form>

                </div>
            </div>
    );

    const travelReturnForm = () => {

        return(
            <div className="full-width col-12 fullWidth">
                <div className="row">
                    <form noValidate autoComplete="off" className={classes.root}>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Enter origin city" type="text" value={origin} onChange={handleFormChange('origin')} fullWidth required/>
                        </div>
                        <div className="form-group">
                            <TextField id="standard-basic" label="Enter desination city" value={destination} onChange={handleFormChange('destination')} fullWidth required/>
                        </div>
                        
                        <div className="form-group">
                        <TextField
                            id="standard-basic"
                            label="Departure Date"
                            type="date"
                            value={dep_date}
                            fullWidth
                            onChange={handleFormChange('dep_date')}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>

                        <div className="form-group">
                        <TextField
                            id="standard-basic"
                            label="Return Date"
                            type="date"
                            value={ret_date}
                            fullWidth
                            onChange={handleFormChange('ret_date')}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                        </div>

                        <div className="form-group">
                        <InputLabel id="passengers">Passengers</InputLabel>
                            <select className="form-control" id="passengers" value={passengers} onChange={handleFormChange('passengers')}>
                                <option>Select</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        
                        <div className="full-width mt-3 fullWidth" style={{width: '100%'}}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography id="discrete-slider" gutterBottom>
                                        Fare Range
                                    </Typography>

                                    <Slider
                                        width="100%"
                                        defaultValue={1000}
                                        aria-labelledby="discrete-slider"
                                        valueLabelDisplay="auto"
                                        step={1000}
                                        marks
                                        min={1000}
                                        max={11000}
                                        required
                                        onChange={(e, v) => setData({...data, price_range: v})}
                                        valueLabelDisplay="on"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                        <Button variant="contained" color="primary" onClick={onSubmit}>
                            Search
                        </Button>
                    </form>

                </div>
            </div>
        );
    }


    return (
            <div className="side-menu col-12">

                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="Tabs">
                        <Tab label="One Way" {...a11yProps(0)} />
                        <Tab label="Return" {...a11yProps(1)} />
                        
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                {travelForm()}
                </TabPanel>
                <TabPanel value={value} index={1}>
                    {travelReturnForm()}
                </TabPanel>
            </div>
    )
}
