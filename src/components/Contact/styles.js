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
    contactContainer_Contact: {
        position: 'relative'
    },
    contactImg_Contact: {
        objectFit: 'cover',
        minHeight: '550px',
        height: '60vh'
    },
    contactFormGrid_Contact: {
        position: 'absolute', 
        top: '10%', 
        left: '50%', 
        height: '80%', 
        width: '45%', 
        background: 'rgba(255,255,255,.2)', 
        borderRadius: '5px',
        minHeight: '500px',
        overflow: 'hidden'
    },
    contactForm_Contact: {
        width: '90%',
        marginTop: '1em'
    },
    contactFormLabel_Contact: {
        marginBottom: '5px',
        textShadow: '1px 1px 3px black',
        color: 'rgba(255,255,255,.9)',
        textTransform: 'uppercase',
        letterSpacing: '1.25px'
    },
    contactFromInputs_Contact: {
        minHeight: '20px',
        borderRadius: '10px',
        border: '3px solid rgb(150,150,150,.4)',
        fontFamily: 'Rubik, sans-serif',
        fontSize: '20px',
        marginBottom: '20px',
        background: 'rgba(255,255,255,.6)',
        color: 'rgba(0,0,0,.87)',
        padding: '5px 15px',
        '&:hover': {
            border: '3px solid rgba(0,0,0,.8)'
        },
        '&:focus': {
            border: '3px solid rgba(255,255,255,.87)',
            backgroundColor: 'rgba(255,255,255,.8)',
            outline: 'none',
        },
    },
    sendMessage_Contact: {
        display: 'flex',
        alignItems: 'center',
        textShadow: '1px 1px 3px black',
        color: 'rgba(255,255,255,.9)',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: '300',
        '&:hover': {
            color: 'rgba(18,194,233,.8)',
            cursor: 'pointer'
        }
    },
    sendIcon_Contact: {
        marginLeft: '7px',
        fontSize: 'small'
    }
}));

export default useStyles;