import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    loadingPage: {
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 999999999,
        background: 'rgb(230,230,230)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    loaded: {
        height: 0,
        width: 0,
        opacity: 0
    },
    loaderContainer: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent:'center'
    },
    loadingTitle: {
        fontSize: '4rem',
        fontFamily: 'Kaushan Script, sans-sefif',
        color: 'rgb(255, 35, 35)',
        fontWeight: 'bold',
        textShadow: '4px 3px rgb(200,200,200)',
        marginBottom: '10px'
    },
    loadingLogo: {
        height: '200px',
    }
}));

export default useStyles;