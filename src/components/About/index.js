import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import Profile2 from '../../assets/images/profile2.jpg';
import Bootstrap from '../../assets/images/bootstrap.svg';
import Css from '../../assets/images/css.svg';
import Git from '../../assets/images/git.svg';
import Html from '../../assets/images/html.svg';
import Jquery from '../../assets/images/jquery.svg';
import Js from '../../assets/images/js.svg';
import Mui from '../../assets/images/mui.svg';
import ReactIcon from '../../assets/images/react.svg';

const About = () => {
    const classes = useStyles();
    
    const skills = [
        {name: 'React', image: ReactIcon},
        {name: 'Html', image: Html},
        {name: 'Css', image: Css},
        {name: 'JavaScript', image: Js},
        {name: 'JQuery', image: Jquery},
        {name: 'Material-UI', image: Mui},
        {name: 'Bootstrap', image: Bootstrap},
        {name: 'Git', image: Git}
    ];

    return (
        <section className={`section border-top`} id='about'>
            <Grid container className={classes.sectionTitleContainer} justifyContent='center'>
                <Typography className={classes.sectionTitleShadow}>
                    About Me
                </Typography>
                <Typography className={`${classes.sectionTitle} text-theme`} variant='h2'>
                    Know Me More
                </Typography>
            </Grid>
            <Grid container>
                <Grid item xs={6}>
                    <Box style={{height: '450px', display: 'flex', justifyContent: 'center'}}>
                        <img src={Profile2} height='100%' alt='Xavy Smiling!' 
                            style={{borderRadius: '30%', boxShadow: '6px 6px 20px black'}}
                        />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Typography style={{ marginBottom: '10px', letterSpacing: '1.25px'}} variant='body2'>
                            <span className={classes.bold_About}> I am Xavy Romeo, a Front End Web Developer </span>
                            with a degree in Business Economics from UC Irvine and a 
                            Full Stack Web Development certificate from UCLA
                            Extension Boot Camps. I can help visions and ideas come to life.                             
                        </Typography>
                        <Typography variant='body2'>    

                        {/* Take a look at my projects and see if my knowledge and skills
                            are a right fit for you. */}
                            {/* Known as a Problem-Solver and simply gets things done. 

                             Show me a design and I can create it. 
                           
                             


                            applied agile development principles coupled with version control, testing, code review, and collaborative coding.
                            I speak English, Spanish and some French.
                            Spare time soccer, baseball, gym, and explore the world.
                    


                            Responsive Design!!!! Making API calls

                            

                            based in Sunny Southern California.  */}
                        </Typography>
                    </Box>
                    <Grid container direction='column' alignItems='center'>
                        <Typography className={`text-theme`} variant='h5' style={{marginTop: '20px', fontWeight: '600', textShadow: '1px 1px black'}}>
                            My Skills
                        </Typography>
                        <Grid container className={classes.skillBarContainer_About}>
                            {skills.map((skill, index) => (
                                <Grid item xs={3} key={index}>
                                    <Grid container direction='column' alignItems='center' style={{padding: '10px 0'}}>
                                        <Box >
                                            <img 
                                                src={skill.image} 
                                                height='100%'
                                                width='100%'
                                                alt={skill.name} 
                                            />
                                        </Box>
                                        <Box>
                                            <Typography style={{textTransform: 'uppercase'}} variant='caption1'>
                                                {skill.name}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </section>
    );
};

export default About;
