import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MdWavingHand } from 'react-icons/md';

import useStyles from './styles';
import ProfilePic from '../../assets/images/profile.jpg';


const Top = () => {
    const classes = useStyles();

    return (
        <section className={classes.topSection_Top} id='home'>
            <Grid container className={classes.mainGrid_Top} justifyContent='space-between' alignItems='center'>
                <Grid item className={classes.infoGrid_Top} xs={6} style={{paddingRight: 20}}>
                    <Grid container direction='column' justifyContent='center'>
                        <Typography variant='subtitle2' style={{textTransform: 'uppercase', fontWeight: 'bold', paddingBottom: '10px'}}>
                            Welcome
                        </Typography>    
                        <Typography className={classes.hiTitle_Top} variant='h2'>
                            Hi, I'm Xavy Romeo
                        </Typography>
                        <Typography className={`${classes.webDevTitle_Top} text-theme`} variant='h2'>
                            Front End Web Developer
                        </Typography>
                        <Typography style={{paddingBottom: '10px'}}>
                            I develop and build web applicatons specific to your needs. Click Say Hi below to let me know how my skills can work for you.
                        </Typography>
                        <a href='#contact' style={{textDecoration: 'none'}}>
                            <Typography className={`say-hi-link`} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} variant='subtitle2' component='span' style={{color: 'black', letterSpacing: '2px', textTransform: 'uppercase'}}>
                                Say Hi 
                                {/* 👋 */}
                                <MdWavingHand style={{marginLeft: '5px', paddingTop: 5}} />
                            </Typography>
                        </a>
                        <Typography variant='h3' className={`text-theme`} style={{fontFamily: 'Kaushan Script, sans-sefif', fontWeight: 'bold', transform: 'skewY(-5deg)', paddingBottom: 5, display: 'flex', justifyContent: 'center', paddingRight: '100px', textShadow: '9px 9px 20px rgb(50,50,50,.5)'}}>
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
                                
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </section>
    );
};

export default Top;
