import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { BsArrowUpRight } from 'react-icons/bs';

import useStyles from './styles';
import testImage from '../../assets/images/xavy1.png';
import HowRU from '../../assets/images/howru.png';
import RunBuddy from '../../assets/images/runbuddy.png';

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
                <Grid container>
                    <Grid item xs={4} className={`${classes.projectGridContainer_Portfolio} ${classes.paddingRight_Portfolio}`}>
                        <Grid 
                            container 
                            className={classes.projectGrid_Portfolio}
                            direction='column' 
                            justifyContent='center' 
                            alignItems='center' 
                        >
                            <Box className={classes.imgProjectContainer_Portfolio}>
                                <img src={testImage} className={classes.imgProject_Portfolio} height='100%' width='100%' alt='' />
                                <Box className={classes.imgHoverContainer_Portfolio}>
                                    <Box className={classes.infoProjectHoverContainer_Portfolio}>
                                        <Grid 
                                            container 
                                            className={classes.infoProjectHover_Portfolio} 
                                            direction='column' 
                                            justifyContent='center' 
                                            alignItems='center' 
                                        >
                                            <Typography variant='subtitle2'>
                                                Manage It
                                            </Typography>
                                            
                                            <Typography className={classes.viewProjectHover_Portfolio} variant='caption'>
                                                View Project
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                            <Grid container className={classes.projectInfoContainer_Portfolio} direction='column' justifyContent='space-between'>
                                <Grid container direction='column'>
                                    <Typography className={`${classes.projectAppTitle_Project} text-theme`} variant='body2'>
                                        E-Commerce Application
                                    </Typography>
                                    <Typography className={classes.projectTitle_Project} variant='subtitle1'>
                                        The Xavy Shop
                                    </Typography>
                                    <Typography className={classes.techUsed_Project} variant='caption'>
                                        Technologies Used: 
                                    </Typography>
                                    <Typography className={classes.techUsedInfo_Project} variant='caption'>
                                        React, Material-UI, MongoDB, Express, JavaScript, NodeJS, HTML, CSS, GraphQL
                                    </Typography>
                                </Grid>
                                <Box className={classes.viewProjectContainer_Project}>
                                    <a href='#' className={classes.viewProjectLink_Project}>
                                        <Typography className={`${classes.viewProjectLinkTypography_Project} view-project-link`} variant='caption'>
                                            View Project
                                            <BsArrowUpRight className={classes.viewProjectArrow_Portfolio} />
                                        </Typography>
                                    </a>
                                </Box>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={`${classes.projectGridContainer_Portfolio} ${classes.paddingLeft_Portfolio} ${classes.paddingRight_Portfolio}`}>
                        <Grid 
                            container 
                            className={classes.projectGrid_Portfolio}
                            direction='column' 
                            justifyContent='center' 
                            alignItems='center' 
                        >
                            <Box className={classes.imgProjectContainer_Portfolio}>
                                <img src={HowRU} className={classes.imgProject_Portfolio} height='100%' width='100%' alt='' />
                                <Box className={classes.imgHoverContainer_Portfolio}>
                                    <Box className={classes.infoProjectHoverContainer_Portfolio}>
                                        <Grid 
                                            container 
                                            className={classes.infoProjectHover_Portfolio} 
                                            direction='column' 
                                            justifyContent='center' 
                                            alignItems='center' 
                                        >
                                            <Typography variant='subtitle2'>
                                                HowRU
                                            </Typography>
                                            
                                            <Typography className={classes.viewProjectHover_Portfolio} variant='caption'>
                                                View Project
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                            <Grid container className={classes.projectInfoContainer_Portfolio} direction='column' justifyContent='space-between'>
                                <Grid container direction='column'>
                                <Typography className={`${classes.projectAppTitle_Project} text-theme`} variant='body2'>
                                        Mental Health Application
                                    </Typography>
                                    <Typography className={classes.projectTitle_Project} variant='subtitle1'>
                                        HowRU
                                    </Typography>
                                    <Typography className={classes.techUsed_Project} variant='caption'>
                                        Technologies Used: 
                                    </Typography>
                                    <Typography className={classes.techUsedInfo_Project} variant='caption'>
                                        React, Material-UI, MongoDB, Express, JavaScript, AJAX, HTML, CSS, NodeJS
                                    </Typography>
                                </Grid>
                                <Box className={classes.viewProjectContainer_Project}>
                                    <a href='#' className={classes.viewProjectLink_Project}>
                                        <Typography className={`${classes.viewProjectLinkTypography_Project} view-project-link`} variant='caption'>
                                            View Project
                                            <BsArrowUpRight className={classes.viewProjectArrow_Portfolio} />
                                        </Typography>
                                    </a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={4} className={`${classes.projectGridContainer_Portfolio} classes.paddingLeft_Portfolio}`}>
                        <Grid 
                            container 
                            className={classes.projectGrid_Portfolio}
                            direction='column' 
                            justifyContent='center' 
                            alignItems='center' 
                        >
                            <Box className={classes.imgProjectContainer_Portfolio}>
                                <img src={RunBuddy} className={classes.imgProject_Portfolio} height='100%' width='100%' alt='' />
                                <Box className={classes.imgHoverContainer_Portfolio}>
                                    <Box className={classes.infoProjectHoverContainer_Portfolio}>
                                        <Grid 
                                            container 
                                            className={classes.infoProjectHover_Portfolio} 
                                            direction='column' 
                                            justifyContent='center' 
                                            alignItems='center' 
                                        >
                                            <Typography variant='subtitle2'>
                                                Run Buddy
                                            </Typography>
                                            
                                            <Typography className={classes.viewProjectHover_Portfolio} variant='caption'>
                                                View Project
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </Box>
                            </Box>
                            <Grid container className={classes.projectInfoContainer_Portfolio} direction='column' justifyContent='space-between'>
                                <Grid container direction='column'>
                                <Typography className={`${classes.projectAppTitle_Project} text-theme`} variant='body2'>
                                        Runner Landing Page
                                    </Typography>
                                    <Typography className={classes.projectTitle_Project} variant='subtitle1'>
                                        Run Buddy
                                    </Typography>
                                    <Typography className={classes.techUsed_Project} variant='caption'>
                                        Technologies Used: 
                                    </Typography>
                                    <Typography className={classes.techUsedInfo_Project} variant='caption'>
                                        HTML, CSS
                                    </Typography>
                                </Grid>
                                <Box className={classes.viewProjectContainer_Project}>
                                    <a href='#' className={classes.viewProjectLink_Project}>
                                        <Typography className={`${classes.viewProjectLinkTypography_Project} view-project-link`} variant='caption'>
                                            View Project
                                            <BsArrowUpRight className={classes.viewProjectArrow_Portfolio} />
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
        </section>
    );
};

export default Portfolio;
