import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    mainModalContainer_ProjectModal: {
        borderRadius: '5px',
        padding: '50px 80px',
        background: 'linear-gradient(145deg,rgba(205,235,235,1),rgba(255,255,255,1))', 
        boxShadow: theme.shadows[10],
        width: '1200px'
    },
    projectTitle_ProjectModal: {
        fontWeight: '600',
        textShadow: `1px 1px ${theme.palette.text.primary}`
    },
    mainImgContainer_ProjectModal: {
        display: 'flex',
        justifyContent: 'center',
        margin: '30px 0'
    },
    imgContainer_ProjectModal: {
        position: 'relative',
        width: '85%', 
        border: '1px solid rgba(0,0,0,.4)',
        borderRadius: '5px',
        boxShadow: theme.shadows[10]
    },
    imgHoverContainer_ProjectModal: {
        position: 'absolute',
        top: 0,
        left: 0,
        background: 'rgba(0,0,0,.2)',
        height: '100%',
        width: '100%',
        opacity: 0,
        transition: '.2s ease-in-out',
        '&:hover': {
            opacity: 1
        }
    },
    infoContainer_ProjectModal: {
        height: '100%'
    },
    descriptionTitle_ProjectModal: {
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '1.25px'
    },
    techUsedTitle_ProjectModal: {
        fontWeight: '800',
        textTransform: 'uppercase',
        letterSpacing: '1.25px',
        marginTop: '15px'
    },
    infoText_ProjectModal: {
        color: 'rgba(40,40,40,.8)'
    },
    linksContainer_ProjectModal: {
        marginTop: '20px'
    },
    launchLink_ProjectModal: {
        textDecoration: 'none',
        color: 'rgb(120,0,220)'
    },
    githubLink_ProjectModal: {
        textDecoration: 'none',
        marginLeft: '40px',
        color: 'rgb(120,0,220)'
    },
    linkTypography_ProjectModal: {
        textTransform: 'uppercase',
        fontWeight: '600',
        letterSpacing: '2px',
        display: 'flex', 
        alignItems:'center'
    },
    linkIcon_ProjectModal: {
        marginRight: '5px'
    }
}));

export default useStyles;