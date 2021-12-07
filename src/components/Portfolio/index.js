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
                        <Grid item xs={4} className={classes.paddingRight_Portfolio}>
                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                style={{
                                    borderRadius: '15px', 
                                    height: '100%', 
                                    width: '100%', 
                                    padding: '5% 0', 
                                    background: 'linear-gradient(145deg,rgba(205,235,235,.3),rgba(255,255,255,.5))', 
                                    boxShadow: '5px 5px 15px #d1d9e6,-5px -5px 15px #fff'
                                }}
                            >
                                <Box style={{position: 'relative', heigth: '100%', width: '90%', marginBottom: '15px'}}>
                                    <img src={testImage} height='100%' width='100%' style={{borderRadius: '3px'}} alt='' />
                                    <Box 
                                        style={{
                                            background: 'rgba(0,0,0,.7)',
                                            position: 'absolute', 
                                            top: 0, 
                                            left: 0,                                              
                                            height: '100%', 
                                            width: '100%'
                                        }}
                                    >
                                        <Box
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                height: '100%',
                                                width: '100%'
                                            }}
                                        >
                                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    color: 'rgba(255,255,255,.9)',
                                                    cursor:'pointer'
                                                }}
                                            >
                                                <Typography variant='subtitle2'>
                                                    Manage It
                                                </Typography>
                                                
                                                <Typography variant='caption' style={{letterSpacing: '2px', textTransform: 'uppercase', color: 'lightblue'}}>
                                                    View Project
                                                </Typography>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                                <Grid container direction='column' justifyContent='space-between' style={{width: '90%'}}>
                                    
                                    <Grid container direction='column'>
                                        <Typography className={`text-theme`} variant='body2' style={{fontWeight: '600'}}>
                                            Task Manager Application
                                        </Typography>
                                        <Typography variant='subtitle1' style={{fontWeight: '700'}}>
                                            Manage It
                                        </Typography>
                                        <Typography style={{fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase'}} variant='caption'>
                                            Technologies Used: 
                                        </Typography>
                                        <Typography variant='caption' style={{color: 'rgba(40,40,40,.7)', height: '60px'}}>
                                            HandelBars, MySQL, NodeJS, Express, HTML, CSS
                                        </Typography>
                                    </Grid>
                                    <Box style={{display: 'flex', marginTop: '20px'}}>
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
                        <Grid item xs={4} className={`${classes.paddingLeft_Portfolio} ${classes.paddingRight_Portfolio}`}>
                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                style={{
                                    borderRadius: '15px', 
                                    height: '100%', 
                                    width: '100%', 
                                    padding: '5% 0', 
                                    background: 'linear-gradient(145deg,rgba(205,235,235,.3),rgba(255,255,255,.5))', 
                                    boxShadow: '5px 5px 15px #d1d9e6,-5px -5px 15px #fff'
                                }}
                            >
                                <Box style={{position: 'relative', heigth: '100%', width: '90%', marginBottom: '15px'}}>
                                    <img src={testImage} height='100%' width='100%' style={{borderRadius: '3px'}} alt='' />
                                    <Box 
                                        style={{
                                            background: 'rgba(0,0,0,.7)',
                                            position: 'absolute', 
                                            top: 0, 
                                            left: 0,                                              
                                            height: '100%', 
                                            width: '100%'
                                        }}
                                    >
                                        <Box
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                height: '100%',
                                                width: '100%'
                                            }}
                                        >
                                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    color: 'rgba(255,255,255,.9)',
                                                    cursor:'pointer'
                                                }}
                                            >
                                                <Typography variant='subtitle2'>
                                                    HowRU
                                                </Typography>
                                                
                                                <Typography variant='caption' style={{letterSpacing: '2px', textTransform: 'uppercase', color: 'lightblue'}}>
                                                    View Project
                                                </Typography>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                                <Grid container direction='column' justifyContent='space-between' style={{width: '90%'}}>
                                    <Grid container direction='column'>
                                        <Typography className={`text-theme`} variant='body2' style={{fontWeight: '600'}}>
                                            Mental Health Application
                                        </Typography>
                                        <Typography variant='subtitle1' style={{fontWeight: '700'}}>
                                            HowRU
                                        </Typography>
                                        <Typography style={{fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase'}} variant='caption'>
                                            Technologies Used: 
                                        </Typography>
                                        <Typography variant='caption' style={{color: 'rgba(40,40,40,.7)', height: '60px'}}>
                                            React, Material-UI, MongoDB, Express, JavaScript, AJAX, HTML, CSS, NodeJS
                                        </Typography>
                                    </Grid>
                                    <Box style={{display: 'flex', marginTop: '20px'}}>
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
                        <Grid item xs={4} className={classes.paddingLeft_Portfolio}>
                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                style={{
                                    borderRadius: '15px', 
                                    height: '100%', 
                                    width: '100%', 
                                    padding: '5% 0', 
                                    background: 'linear-gradient(145deg,(205,235,235,.3),rgba(255,255,255,.5))', 
                                    boxShadow: '5px 5px 15px #d1d9e6,-5px -5px 15px #fff'
                                }}
                            >
                                <Box style={{position: 'relative', heigth: '100%', width: '90%', marginBottom: '15px'}}>
                                    <img src={testImage} height='100%' width='100%' style={{borderRadius: '3px'}} alt='' />
                                    <Box 
                                        style={{
                                            background: 'rgba(0,0,0,.7)',
                                            position: 'absolute', 
                                            top: 0, 
                                            left: 0,                                              
                                            height: '100%', 
                                            width: '100%'
                                        }}
                                    >
                                        <Box
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                height: '100%',
                                                width: '100%'
                                            }}
                                        >
                                            <Grid container direction='column' justifyContent='center' alignItems='center' 
                                                style={{
                                                    height: '100%',
                                                    width: '100%',
                                                    color: 'rgba(255,255,255,.9)',
                                                    cursor:'pointer'
                                                }}
                                            >
                                                <Typography variant='subtitle2'>
                                                    Run Buddy
                                                </Typography>
                                                
                                                <Typography variant='caption' style={{letterSpacing: '2px', textTransform: 'uppercase', color: 'lightblue'}}>
                                                    View Project
                                                </Typography>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Box>
                                <Grid container direction='column' justifyContent='space-between' style={{width: '90%'}}>
                                    <Grid container direction='column'>
                                        <Typography className={`text-theme`} variant='body2' style={{fontWeight: '600'}}>
                                            Runner Landing Page
                                        </Typography>
                                        <Typography variant='subtitle1' style={{fontWeight: '700'}}>
                                            Run Buddy
                                        </Typography>
                                        <Typography style={{fontWeight: '600', letterSpacing: '1.5px', textTransform: 'uppercase'}} variant='caption'>
                                            Technologies Used: 
                                        </Typography>
                                        <Typography variant='caption' style={{color: 'rgba(40,40,40,.7)', height: '60px'}}>
                                            HTML, CSS
                                        </Typography>
                                    </Grid>
                                    <Box style={{display: 'flex', marginTop: '20px'}}>
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

                    <Box>
                        Want to see More??? Visit my GitHub!!!
                    </Box>
                   
                </Grid>
            </Grid>
            
        </section>
    );
};

export default Portfolio;
