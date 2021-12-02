import useStyles from './styles';
import Loader from '../../components/Loader'; 
import Header from '../../components/Header';

import Box from '@material-ui/core/Box';

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Loader />
            <Header />

            <main class="wrapper">
                <section id="home">
                    <Box style={{height: '110vh'}} />
                </section> 
                <section id="about">
                    <Box style={{height: '100vh', background: 'red'}} />
                </section> 
                <section id="portfolio">
                    <Box style={{height: '100vh', background: 'blue'}} />
                </section> 
                <section id="resume">
                    <Box style={{height: '100vh', background: 'green'}} />
                </section> 
                <section id="contact">
                    <Box style={{height: '100vh', background: 'orange'}} />
                </section> 

            </main>



            <Box style={{height: '200vh'}} />


            <Box className={classes.rightEffects_Home} />
            <Box className={classes.leftEffects_Home} />
        </>
    );
};

export default Home;