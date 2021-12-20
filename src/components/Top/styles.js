import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    topSection_Top: {
        minHeight: '95vh'
    },
    mainGrid_Top: {
        padding: '180px 0 100px 0',
        '@media (max-width:650px)': {
            paddingTop: '100px',
        },
    },
    infoGrid_Top: {
        paddingRight: '20px',
    },
    welcome_Top: {
        textTransform: 'uppercase', 
        fontWeight: 'bold', 
        paddingBottom: '10px',
    },
    hiTitle_Top: {
        fontSize: '60px',
        fontWeight: '700',
        paddingBottom: '10px',
        '@media (max-width:1120px)': {
            fontSize: '50px',
        },
        '@media (max-width:959px)': {
            fontSize: '60px',
        },
        '@media (max-width:650px)': {
            fontSize: '50px',
        },
        '@media (max-width:550px)': {
            fontSize: '40px',
        },
        '@media (max-width:450px)': {
            fontSize: '30px',
        },
        '@media (max-width:360px)': {
            fontSize: '24px',
        }
    },
    webDevTitle_Top: {
        fontSize: '60px',
        fontWeight: '700',
        paddingBottom: '10px',
        '@media (max-width:1120px)': {
            fontSize: '50px',
        },
        '@media (max-width:959px)': {
            fontSize: '60px',
        },
        '@media (max-width:650px)': {
            fontSize: '50px',
        },
        '@media (max-width:550px)': {
            fontSize: '40px',
        },
        '@media (max-width:450px)': {
            fontSize: '30px',
        },
        '@media (max-width:360px)': {
            fontSize: '24px',
        }
    },
    info_Top: {
        paddingBottom: '10px',
        '@media (max-width:1120px)': {
            fontSize: '16px',
        },
        '@media (max-width:959px)': {
            fontSize: '20px',
        },
        '@media (max-width:650px)': {
            fontSize: '16px',
        }
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
        textShadow: '4px 4px 8px rgb(50,50,50,.2)',
        '@media (max-width:959px)': {
            paddingRight: '0',
        }
    },
    imageContainer_Top: {
        '@media (max-width:959px)': {
            justifyContent: 'center',
            marginTop: '40px'
        }
    },
    imageDiv_Top: {
        height: '700px',
        display: 'flex',
        alignItems: 'center',
        boxShadow: theme.shadows[10],
        '@media (max-width:1399px)': {
            height: '600px',
        },
        '@media (max-width:1200px)': {
            height: '550px'
        },
        '@media (max-width:959px)': {
            height: '100%'
        }
    },
    image_Top: {
        height: '700px',
        maxHeight: '900px',
        objectFit: 'cover',
        '@media (max-width:1200px)': {
            height: '100%'
        }
    }
}));

export default useStyles;