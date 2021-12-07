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
                <Grid item xs={5}>
                    <Box className={classes.profileImgContainer_About}>
                        <img src={Profile2} className={classes.profileImg_About} height='100%' alt='Xavy Smiling!'/>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box>
                        <Typography className={classes.aboutText_About} variant='body2'>
                            <span className={classes.bold_About}> I am Xavy Romeo, a Full Stack Software Engineer </span>
                            with a degree in Business Economics from UC Irvine and a 
                            Full Stack Web Development certificate from UCLA
                            Extension Boot Camps. I can help visions and ideas come to life.                             
                        </Typography>   
                    </Box>
                    <Grid container direction='column' alignItems='center'>
                        <Typography className={`${classes.mySkillsTitle_About} text-theme`} variant='h5'>
                            My Skills
                        </Typography>
                        <Grid container className={`skills-bar-container`}>
                            {skills.map((skill, index) => (
                                <Grid item xs={3} key={index}>
                                    <Grid container className={classes.skillContainer_About} direction='column' alignItems='center'>
                                        <Box >
                                            <img 
                                                src={skill.image} 
                                                height='100%'
                                                width='100%'
                                                alt={skill.name} 
                                            />
                                        </Box>
                                        <Box>
                                            <Typography className={classes.skillName_About} variant='caption1'>
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
