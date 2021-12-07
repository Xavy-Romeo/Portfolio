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
    paddingLeft_Portfolio: {
        paddingLeft: '1%'
    },
    paddingRight_Portfolio: {
        paddingRight: '1%'
    },
    mainSectionTitleContainer_Portfolio: {
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center'
    },
    mainSectionTitle_Portfolio: {
        fontWeight: '500',
        textShadow: `1px 1px ${theme.palette.text.primary}`
    },
    projectGridContainer_Portfolio: {
        display: 'flex',
        justifyContent: 'center'
    },
    projectGrid_Portfolio: {
        borderRadius: '15px', 
        height: '100%', 
        width: '100%', 
        padding: '5% 0', 
        background: 'linear-gradient(145deg,rgba(205,235,235,.3),rgba(255,255,255,.5))', 
        boxShadow: '5px 5px 15px #d1d9e6,-5px -5px 15px #fff',
        maxWidth: '350px'
    },
    imgProjectContainer_Portfolio: {
        position: 'relative', 
        heigth: '100%', 
        width: '90%', 
        marginBottom: '15px'
    },
    imgProject_Portfolio: {
        borderRadius: '3px'
    },
    imgHoverContainer_Portfolio: {
        background: 'rgba(0,0,0,.7)',
        position: 'absolute', 
        top: 0, 
        left: 0,                                              
        height: '100%', 
        width: '100%',
        transition: '.2s ease-in-out',
        opacity: '0',
        '&:hover': {
            opacity: '1'
        }
    },
    infoProjectHoverContainer_Portfolio: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
    },
    infoProjectHover_Portfolio: {
        height: '100%',
        width: '100%',
        color: 'rgba(255,255,255,.9)',
        cursor:'pointer'
    },
    viewProjectHover_Portfolio: {
        letterSpacing: '2px', 
        textTransform: 'uppercase', 
        color: 'rgba(18,194,233,1)'
    },
    projectInfoContainer_Portfolio: {
        width: '90%'
    },
    projectAppTitle_Project: {
        fontWeight: '600'
    },
    projectTitle_Project: {
        fontWeight: '700'
    },
    techUsed_Project: {
        fontWeight: '600', 
        letterSpacing: '1.5px', 
        textTransform: 'uppercase'
    },
    techUsedInfo_Project: {
        color: 'rgba(40,40,40,.7)', 
        height: '60px'
    },
    viewProjectContainer_Project: {
        display: 'flex', 
        marginTop: '20px'
    },
    viewProjectLink_Project: {
        textDecoration: 'none',         
    },
    viewProjectLinkTypography_Project: {
        color: theme.palette.text.primary, 
        fontWeight: '600', 
        display: 'flex', 
        alignItems: 'center', 
        padding:'5px 0',
        textTransform: 'uppercase', 
        letterSpacing: '2px'
    },
    viewProjectArrow_Portfolio: {
        margin: '0 2px 0 7px'
    }
}));

export default useStyles;