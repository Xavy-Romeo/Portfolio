import useStyles from './styles';
import Loader from '../../components/Loader'; 
import Header from '../../components/Header';
import Top from '../../components/Top';
import About from '../../components/About';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Loader />
            <Header />

            <main >
                <Container maxWidth='xl'>
                    <Top />
                    <About />
                </Container>






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