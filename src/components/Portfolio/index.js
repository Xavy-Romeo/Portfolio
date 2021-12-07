import { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { BsArrowUpRight } from 'react-icons/bs';

import useStyles from './styles';
import ProjectModal from '../ProjectModal';
import TheXavyShop from '../../assets/images/the-xavy-shop.png';
import HowRU from '../../assets/images/howru.png';
import RunBuddy from '../../assets/images/run-buddy.png';

const Portfolio = () => {
    const classes = useStyles();

    const projects = [
        {name: 'The Xavy Shop', type: 'E-commerce Application', languages: 'React, Material-UI, MongoDB, Express, JavaScript, NodeJS, HTML, CSS, GraphQL', image: TheXavyShop},
        {name: 'HowRU', type: 'Mental Health Application', languages: 'React, Material-UI, MongoDB, Express, JavaScript, AJAX, HTML, CSS, NodeJS', image: HowRU},
        {name: 'Run Buddy', type: 'Run Buddy Landing Page', languages: 'HTML, CSS', image: RunBuddy}
    ];

    const [open, setOpen] = useState(false);
  
    const handleOpen = (project) => {
      setOpen(true);
      setModalProject(project);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const [modalProject, setModalProject] = useState({});
    
    return (
        <section className={`section border-top`} id='portfolio'>
            <Modal
                className={classes.modal_Project}
                open={open}
                onClose={handleClose}
            >
                <ProjectModal 
                    project={modalProject}
                    handleClose={handleClose}
                />
            </Modal>

            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    Portfolio
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    My Work
                </Typography>
            </Grid>
            <Grid container direction='column'>
                <Grid container className={classes.sampleWorkTitleContainer_Portfolio} direction='column' alignItems='center'>
                    <Typography className={classes.sampleWorkTitle_Portfolio} variant='h4'>
                        Some Examples Of My Work
                    </Typography>
                    <Typography className={classes.sampleWorkText_Portfolio} variant='body2'>
                        Examples include my knowledge in React, JavaScript, Database implementation, internal and external API integration, 
                        API access control, CSS, and Responsive Design.
                    </Typography>
                </Grid>                    
                <Grid container>
                    {projects.map((project, index) => (
                        <Grid item xs={4} className={classes.projectGridContainer_Portfolio} key={index}>
                            <Grid 
                                container 
                                className={classes.projectGrid_Portfolio}
                                direction='column' 
                                justifyContent='center' 
                                alignItems='center' 
                            >
                                <Box 
                                    onClick={() => handleOpen(project)}
                                    className={classes.imgProjectContainer_Portfolio}
                                >
                                    <img src={project.image} className={classes.imgProject_Portfolio} height='100%' width='100%' alt='' />
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
                                                    {project.name}
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
                                            {project.type}
                                        </Typography>
                                        <Typography className={classes.projectTitle_Project} variant='subtitle1'>
                                            {project.name}
                                        </Typography>
                                        <Typography className={classes.techUsed_Project} variant='caption'>
                                            Technologies Used: 
                                        </Typography>
                                        <Typography className={classes.techUsedInfo_Project} variant='caption'>
                                            {project.languages}
                                        </Typography>
                                    </Grid>
                                    <Box className={classes.viewProjectContainer_Project}>
                                        <a onClick={() => handleOpen(project)} className={classes.viewProjectLink_Project}>
                                            <Typography className={`${classes.viewProjectLinkTypography_Project} view-project-link`} variant='caption'>
                                                View Project
                                                <BsArrowUpRight className={classes.viewProjectArrow_Portfolio} />
                                            </Typography>
                                        </a>
                                    </Box>
                                    
                                </Grid>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>

                <Grid container className={classes.seeMoreContainer_Portfolio} justifyContent='center'>
                    <Typography variant='body2'>
                        Want to see More??? Visit my GitHub 
                        <a href='#' className={classes.seeMoreHereLink_Portfolio}>
                            Here
                        </a>
                    </Typography>
                </Grid>
                
            </Grid>            
        </section>
    );
};

export default Portfolio;