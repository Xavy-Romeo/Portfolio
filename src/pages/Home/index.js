import useStyles from './styles';
import Loader from '../../components/Loader'; 
import Header from '../../components/Header';


const Home = () => {
    const classes = useStyles();

    return (
        <>
            <Loader />
            <Header />
            Hello World!
        </>
    );
};

export default Home;