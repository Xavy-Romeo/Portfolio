import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    topSection_Top: {
        marginTop: '80px',
        padding: '100px 0 120px 0',
        minHeight: '100vh'
    },
    infoGrid_Top: {
        paddingRight: '20px'
    },
    welcome_Top: {
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        paddingBottom: '10px'
    },
    hiTitle_Top: {
        fontSize: '60px',
        fontWeight: '700',
        paddingBottom: '10px'
    },
    webDevTitle_Top: {
        fontSize: '60px',
        fontWeight: '700',
        paddingBottom: '10px'
    },
    info_Top: {
        paddingBottom: '10px'
    },
    sayHiLink_Top: {
        textDecoration: 'none'
    },
    sayHiLinkSpan_Top: {
        color: theme.palette.text.primary, 
        letterSpacing: '2px', 
        textTransform: 'uppercase'
    },
    handWave_Top: {
        marginLeft: '5px',
        paddingTop: '6px'
    },
    signature_Top: {
        fontFamily: 'Kaushan Script, sans-sefif', 
        fontWeight: 'bold', 
        transform: 'skewY(-5deg)', 
        paddingBottom: '5px', 
        display: 'flex', 
        justifyContent: 'center', 
        paddingRight: '100px', 
        textShadow: '9px 9px 20px rgb(50,50,50,.5)'
    },
    imageDiv_Top: {
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: theme.shadows[10]
    },
    image_Top: {
        maxHeight: '700px',
        objectFit: 'cover'
    }

}));

export default useStyles;