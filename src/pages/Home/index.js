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
            <Box style={{height: '200vh'}} />
            Hello World!
            <Box className={classes.rightEffects_Home} />
            <Box className={classes.leftEffects_Home} />
        </>
    );
};

export default Home;