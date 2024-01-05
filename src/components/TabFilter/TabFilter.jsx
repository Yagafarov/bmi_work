import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles } from '@mui/material';

import card1 from '../../assets/images/cards/card1.png'
import card2 from '../../assets/images/cards/card2.png'
import card3 from '../../assets/images/cards/card3.png'
import card4 from '../../assets/images/cards/card4.png'
import card5 from '../../assets/images/cards/card5.png'
import card6 from '../../assets/images/cards/card6.png'
import { Share } from '@mui/icons-material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index ? (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            ) : (
                <Box sx={{ p: 3 }}>
                    <Typography>Data not found</Typography>
                </Box>
            )}
        </div>
    );
}


CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// with api data
const tabLabels = [
    { id: 1, label: "Mashxur kurslar" },
    { id: 2, label: "Bepul kurslar" },
    { id: 3, label: "Frontend" },
    { id: 4, label: "Dizayn" },
    { id: 5, label: "Sun'iy intellekt" },
]

const useStyles = makeStyles((theme) => ({
    card: {
      transition: 'box-shadow 0.3s ease-in-out',
      '&:hover': {
        boxShadow: theme.shadows[12],
      },
    },
  }));

// main function
export default function TabFilter() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const classes = useStyles();
    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }} display={'flex'} justifyContent={'center'} mt={2}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {
                        tabLabels.map((item, index) => (
                            <Tab label={item.label} {...a11yProps(index)} />
                        ))
                    }
                    <Tab label="" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Box>
                    <Grid container spacing={2} textAlign={'center'}>
                        <Grid item xs={12} md={4}>
                            <Card sx={{ maxWidth: 320 }} style={{margin:'0 auto'}} className={classes.card} >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={card1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" startIcon={<Share />} >Ulashish</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 320 }}  style={{margin:'0 auto'}} >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={card2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 320 }}  style={{margin:'0 auto'}} >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={card3}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 320 }}  style={{margin:'0 auto'}} >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={card4}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 320 }}  style={{margin:'0 auto'}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={card5}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ maxWidth: 320 }}  style={{margin:'0 auto'}} >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="220"
                                    image={card6}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lizards are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Item Three
            </CustomTabPanel>
        </Box>
    );
}