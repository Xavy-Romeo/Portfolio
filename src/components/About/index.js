import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const About = () => {
    const classes = useStyles();
    
    return (
        <section className={`border-top`} id='about'>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    About Me
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    Know Me More
                </Typography>
            </Grid>
            <Grid>
                <Box>
                    Image???
                </Box>
                <Box>
                    <Typography>
                        I am a Front End Web Developer based in the United States. I help bring visions and ideas to life.
                        Show me a design and I can create it. Take a look at my projects and see if my knowledge and skills
                        are a right fit for you.
                    </Typography>
                </Box>
                <Box>
                    SKILL BAR - React, Html, Css, JavaScript, Material-UI, Bootstrap, Jquery, Git
                </Box>
            </Grid>
        </section>
    );
};

export default About;
