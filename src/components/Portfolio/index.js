import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { BsArrowUpRight } from 'react-icons/bs';

import useStyles from './styles';
import testImage from '../../assets/images/xavy1.png'

const Portfolio = () => {
    const classes = useStyles();
    
    return (
        <section className={`section border-top`} id='portfolio'>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    Portfolio
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    My Work
                </Typography>
            </Grid>
            <Grid container direction='column'>
                <Grid container direction='column'>
                    <Box className={classes.mainSectionTitleContainer_Portfolio}>
                        <Typography className={`${classes.mainSectionTitle_Portfolio} text-theme`} variant='h5'>
                            Featured Project
                        </Typography>
                    </Box>
                    <Grid container justifyContent='center'>
                        <Grid container direction='column' justifyContent='center' alignItems='center' style={{width: '50%', height: '300px', border: '1px solid black', borderRadius: '15px' }}>
                            <Box style={{heigth: '200px', width: '500px'}}>
                                <img src={testImage} height='100%' width='100%' alt='' />
                            </Box>
                            <Box>

                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container direction='column'>
                    <Box className={classes.mainSectionTitleContainer_Portfolio}>
                        <Typography className={`${classes.mainSectionTitle_Portfolio} text-theme`} variant='h5'>
                            Other Projects
                        </Typography>
                    </Box>
                    <Grid container justifyContent='center'>
                        <Typography style={{margin: 10}}>
                            All
                        </Typography>
                        <Typography style={{margin: 10}}>
                            React
                        </Typography>
                        <Typography style={{margin: 10}}>
                            MySQL
                        </Typography>
                        <Typography style={{margin: 10}}>
                            MongoDB
                        </Typography>
                        <Typography style={{margin: 10}}>
                            Handlebars
                        </Typography>
                    </Grid>
                    
                    <Grid container>
                        <Grid item xs={3} className={classes.paddingRight_Portfolio} style={{}}>
                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                style={{
                                    // border: '1px solid black', 
                                    borderRadius: '15px', 
                                    height: '100%', 
                                    width: '100%', 
                                    padding: '5% 0', 
                                    background: 'linear-gradient(145deg,rgb(205,235,235),rgb(240,240,240))', 
                                    boxShadow: '5px 5px 15px #d1d9e6,-5px -5px 15px #fff'
                                }}
                            >
                                <Box style={{heigth: '100%', width: '90%'}}>
                                    <img src={testImage} height='100%' width='100%' style={{borderRadius: '3px'}} alt='' />
                                </Box>
                                <Grid container direction='column' style={{width: '90%'}}>
                                    <Typography className={`text-theme`} variant='body2' style={{fontWeight: '600'}}>
                                        E-Commerce Application
                                    </Typography>
                                    <Typography variant='subtitle1' style={{fontWeight: '700'}}>
                                        The Xavy Shop
                                    </Typography>
                                    <Typography style={{fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase'}} variant='caption'>
                                        Technologies Used: 
                                    </Typography>
                                    <Typography variant='caption' style={{color: 'rgba(40,40,40,.7)'}}>
                                        React, React, React, React
                                    </Typography>
                                    <Box style={{display: 'flex'}}>
                                        <a href='#'  style={{textDecoration: 'none', color: 'black', textTransform: 'uppercase', letterSpacing: '2px'}}>
                                            <Typography className={`view-project-link`} variant='caption' style={{fontWeight: '600', display: 'flex', alignItems: 'center', padding:'5px 0'}}>
                                                View Project
                                                <BsArrowUpRight style={{marginLeft: '7px', marginRight: '2px'}} />
                                            </Typography>
                                        </a>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className={`${classes.paddingLeft_Portfolio} ${classes.paddingRight_Portfolio}`}>
                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                style={{
                                    // border: '1px solid black', 
                                    borderRadius: '15px', 
                                    height: '100%', 
                                    width: '100%', 
                                    padding: '5% 0', 
                                    background: 'linear-gradient(145deg,rgb(205,235,235),rgb(240,240,240))', 
                                    boxShadow: '5px 5px 15px #d1d9e6,-5px -5px 15px #fff'
                                }}
                            >
                                <Box style={{heigth: '100%', width: '90%'}}>
                                    <img src={testImage} height='100%' width='100%' style={{borderRadius: '3px'}} alt='' />
                                </Box>
                                <Grid container direction='column' style={{width: '90%'}}>
                                    <Typography className={`text-theme`} variant='body2' style={{fontWeight: '600'}}>
                                        E-Commerce Application
                                    </Typography>
                                    <Typography variant='subtitle1' style={{fontWeight: '700'}}>
                                        The Xavy Shop
                                    </Typography>
                                    <Typography style={{fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase'}} variant='caption'>
                                        Technologies Used: 
                                    </Typography>
                                    <Typography variant='caption' style={{color: 'rgba(40,40,40,.7)'}}>
                                        React, React, React, React
                                    </Typography>
                                    <Box style={{display: 'flex'}}>
                                        <a href='#'  style={{textDecoration: 'none', color: 'black', textTransform: 'uppercase', letterSpacing: '2px'}}>
                                            <Typography className={`view-project-link`} variant='caption' style={{fontWeight: '600', display: 'flex', alignItems: 'center', padding:'5px 0'}}>
                                                View Project
                                                <BsArrowUpRight style={{marginLeft: '7px', marginRight: '2px'}} />
                                            </Typography>
                                        </a>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className={`${classes.paddingLeft_Portfolio} ${classes.paddingRight_Portfolio}`}>
                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                style={{
                                    // border: '1px solid black', 
                                    borderRadius: '15px', 
                                    height: '100%', 
                                    width: '100%', 
                                    padding: '5% 0', 
                                    background: 'linear-gradient(145deg,rgb(205,235,235),rgb(240,240,240))', 
                                    boxShadow: '5px 5px 15px #d1d9e6,-5px -5px 15px #fff'
                                }}
                            >
                                <Box style={{heigth: '100%', width: '90%'}}>
                                    <img src={testImage} height='100%' width='100%' style={{borderRadius: '3px'}} alt='' />
                                </Box>
                                <Grid container direction='column' style={{width: '90%'}}>
                                    <Typography className={`text-theme`} variant='body2' style={{fontWeight: '600'}}>
                                        E-Commerce Application
                                    </Typography>
                                    <Typography variant='subtitle1' style={{fontWeight: '700'}}>
                                        The Xavy Shop
                                    </Typography>
                                    <Typography style={{fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase'}} variant='caption'>
                                        Technologies Used: 
                                    </Typography>
                                    <Typography variant='caption' style={{color: 'rgba(40,40,40,.7)'}}>
                                        React, React, React, React
                                    </Typography>
                                    <Box style={{display: 'flex'}}>
                                        <a href='#'  style={{textDecoration: 'none', color: 'black', textTransform: 'uppercase', letterSpacing: '2px'}}>
                                            <Typography className={`view-project-link`} variant='caption' style={{fontWeight: '600', display: 'flex', alignItems: 'center', padding:'5px 0'}}>
                                                View Project
                                                <BsArrowUpRight style={{marginLeft: '7px', marginRight: '2px'}} />
                                            </Typography>
                                        </a>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={3} className={classes.paddingLeft_Portfolio}>
                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                style={{
                                    // border: '1px solid black', 
                                    borderRadius: '15px', 
                                    height: '100%', 
                                    width: '100%', 
                                    padding: '5% 0', 
                                    background: 'linear-gradient(145deg,rgb(205,235,235),rgb(240,240,240))', 
                                    boxShadow: '5px 5px 15px #d1d9e6,-5px -5px 15px #fff'
                                }}
                            >
                                <Box style={{heigth: '100%', width: '90%'}}>
                                    <img src={testImage} height='100%' width='100%' style={{borderRadius: '3px'}} alt='' />
                                </Box>
                                <Grid container direction='column' style={{width: '90%'}}>
                                    <Typography className={`text-theme`} variant='body2' style={{fontWeight: '600'}}>
                                        E-Commerce Application
                                    </Typography>
                                    <Typography variant='subtitle1' style={{fontWeight: '700'}}>
                                        The Xavy Shop
                                    </Typography>
                                    <Typography style={{fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase'}} variant='caption'>
                                        Technologies Used: 
                                    </Typography>
                                    <Typography variant='caption' style={{color: 'rgba(40,40,40,.7)'}}>
                                        React, React, React, React
                                    </Typography>
                                    <Box style={{display: 'flex'}}>
                                        <a href='#'  style={{textDecoration: 'none', color: 'black', textTransform: 'uppercase', letterSpacing: '2px'}}>
                                            <Typography className={`view-project-link`} variant='caption' style={{fontWeight: '600', display: 'flex', alignItems: 'center', padding:'5px 0'}}>
                                                View Project
                                                <BsArrowUpRight style={{marginLeft: '7px', marginRight: '2px'}} />
                                            </Typography>
                                        </a>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                   
                </Grid>
            </Grid>
            
        </section>
    );
};

export default Portfolio;
