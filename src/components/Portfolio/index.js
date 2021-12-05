import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Portfolio = () => {
    const classes = useStyles();
    
    return (
        <section className={`section border-top`} id='about'>
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
                    <Box style={{height: '300px', border: '1px solid black'}}>

                    </Box>
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
                        <Grid item xs={3} style={{border: '1px solid black', height: 200}}>
                            Project 1
                        </Grid>
                        <Grid item xs={3} style={{border: '1px solid black', height: 200}}>
                            Project 2
                        </Grid>
                        <Grid item xs={3} style={{border: '1px solid black', height: 200}}>
                            Project 3
                        </Grid>
                        <Grid item xs={3} style={{border: '1px solid black', height: 200}}>
                            Project 4
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            
        </section>
    );
};

export default Portfolio;
