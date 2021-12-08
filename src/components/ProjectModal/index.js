import useStyles from './styles';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { IoRocketSharp } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, handleClose }) => {
    const classes = useStyles();

    return (
        <Container maxWidth='xl'>
            <Grid container className={classes.mainModalContainer_ProjectModal} justifyContent='center' alignItems='center' 
                style={{
                    
                }}
            >
                <Typography variant='h4' className={`text-theme`}
                        style={{
                            fontWeight: '600',
                            textShadow: `1px 1px black`
                        }}
                    >
                        {project.name}
                    </Typography>
                <Grid container>
                    <Grid item
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            margin: '30px 0'
                        }}
                    >
                        
                            <Box className={classes.imgContainer_ProjectModal}style={{position: 'relative'}}>
                                <a href='#' >
                                    <img src={project.image} height='100%' width='100%' alt={project.name} 
                                        style={{
                                            
                                        }}
                                    />
                                    <Box className={classes.imgHoverContainer_ProjectModal}
                                        style={{
                                            
                                        }}>

                                    </Box>
                                </a>
                            </Box>
                        
                    </Grid>
                    <Grid item>
                        <Grid container direction='column' justifyContent='center'
                            style={{height: '100%'}}
                        >
                            
                            <Typography variant='body2'
                                style={{
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.25px'
                                }}
                            >
                                Project Description:
                            </Typography>
                            <Typography variant='body2'
                                style={{
                                    color: 'rgba(40,40,40,.8)'
                                }}
                            >
                                {project.description}
                            </Typography>
                            <Typography variant='body2'
                                style={{
                                    fontWeight: '800',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1.25px',
                                    marginTop: '15px'
                                }}
                            >
                                Technology Used: 
                            </Typography>
                            <Typography variant='body2'
                                style={{
                                    color: 'rgba(40,40,40,.8)'
                                }}
                            >
                                {project.languages}
                            </Typography>

                        </Grid>
                    </Grid>
                    <Grid container style={{marginTop: '20px'}}>
                        <a href='#' style={{textDecoration: 'none'}}>
                            <Typography variant='subtitle1' className={`view-project-link`}
                                style={{
                                    textTransform: 'uppercase',
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    display: 'flex', 
                                    alignItems:'center'
                                }}
                            >
                                <IoRocketSharp style={{marginRight: '5px'}} />
                                Launch Live App
                                
                            </Typography>
                        </a>
                        <a href='#'style={{textDecoration: 'none', marginLeft: '40px'}}>
                            <Typography variant='subtitle1' className={`view-project-link`}
                                style={{
                                    textTransform: 'uppercase',
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    display: 'flex', 
                                    alignItems:'center'
                                }}
                            >
                                <FaGithub style={{marginRight: '5px'}}/>
                                View GitHub Repo
                                
                            </Typography>
                        </a>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ProjectModal;