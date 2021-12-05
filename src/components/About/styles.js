import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    sectionTitleContainer: {
        position: 'relative'
    },
    sectionTitleShadow: {
        fontFamily: 'Londrina Outline, cursive',
        textAlign: 'center',
        width: '100%',
        color: 'black',
        fontSize: '120px',
        textShadow: '10px 10px 5px rgb(220,220,220)',
        opacity: '5%',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
    },
    sectionTitle: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -30%)',
        fontWeight: '600',
        textShadow: `1px 1px ${theme.palette.text.primary}`
    },
    bold_About: {
        fontWeight: '600'
    },
    skillBarContainer_About: {
        width: '100%',
        height: '100%',
        borderImage: 'radial-gradient(#f64f59, #12c2e9, #f64f59) 1',
        border: '3px solid transparent',
        marginTop: '10px',
        padding: '20px'
    }

}));

export default useStyles;