import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MdWavingHand } from 'react-icons/md';

import useStyles from './styles';
import ProfilePic from '../../assets/images/profile.jpg';


const Top = () => {
    const classes = useStyles();

    return (
        <section className={classes.topSection_Top} id='home'>
            <Grid container className={classes.mainGrid_Top} justifyContent='space-between' alignItems='center'>
                <Grid item className={classes.infoGrid_Top} xs={6}>
                    <Grid container direction='column' justifyContent='center'>
                        <Typography className={classes.welcome_Top} variant='subtitle2'>
                            Welcome
                        </Typography>    
                        <Typography className={classes.hiTitle_Top} variant='h2'>
                            Hi, I'm Xavy Romeo
                        </Typography>
                        <Typography className={`${classes.webDevTitle_Top} text-theme`} variant='h2'>
                            Front End Web Developer
                        </Typography>
                        <Typography className={classes.info_Top}>
                            I develop and build web applicatons specific to your needs. Click Say Hi below to let me know how my skills can work for you.
                        </Typography>
                        <a href='#contact' className={classes.sayHiLink_Top}>
                            <Typography className={`${classes.sayHiLinkSpan_Top} say-hi-link`} variant='subtitle2' component='span'>
                                Say Hi 
                                <MdWavingHand className={classes.handWave_Top} />
                            </Typography>
                        </a>
                        <Typography variant='h3' className={`${classes.signature_Top} text-theme`}>
                            Xavy Romeo
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item className={classes.imageGrid_Top}xs={5}>
                    <Grid container alignItems='center' justifyContent='flex-end'>
                        <Box className={classes.imageDiv_Top}>
                           <img 
                                src={ProfilePic}
                                className={classes.image_Top} 
                                alt='profile' 
                                width='100%'
                                height='100%'
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default Top;