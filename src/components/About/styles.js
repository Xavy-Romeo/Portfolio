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
    profileImgContainer_About: {
        height: '400px'
    },
    profileImg_About: {
        borderRadius: '50%',
        boxShadow: theme.shadows[10]
    },
    linkContainer_About: {
        width: '400px', 
        margin: '25px 0'
    },
    emailContainer_About: {
        display: 'flex', 
        alignItems: 'flex-end',
        marginBottom: '10px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            color: 'rgb(246,79,89)'
        }
    },
    emailTitle_About: {
        display: 'flex', 
        alignItems: 'center', 
        marginRight: '10px', 
        letterSpacing: '1.25px', 
        textTransform: 'uppercase'
    },
    emailIcon_About: {
        marginRight: '5px'
    },
    email_About: {
        fontWeight: '500'
    },
    socialIcon_About: {
        height: '35px',
        width: '35px',
        marginRight: '20px',
        textDecoration: 'none',
        color: theme.palette.text.primary,
        '&:hover': {
            color: 'rgb(246,79,89)'
        }
    },
    aboutTextContainer_About: {
        marginBottom: '50px'
    },
    aboutText_About: {
        marginBottom: '10px', 
        letterSpacing: '1.25px'
    },
    experienceContainer_About: {
        marginBottom: '50px'
    },
    experienceItem_About: {
        margin: '10px 0'
    },
    aboutTitles_About: {
        fontWeight: '500',
        letterSpacing: '1.25px'
    },
    aboutTitlesBorder_About: {
        borderImage: 'linear-gradient(to left, rgb(18,194,233), rgb(196,113,237), rgb(246,79,89)) 1',
        borderBottom: '2px solid transparent',
        width: '20%',
        marginBottom: '15px'
    },
    positionTitle_About: {
        fontWeight: '500'
    },
    downloadResumeLink_About: {
        display: 'flex', 
        alignItems: 'center', 
        marginTop: '20px', 
        padding: '5px',
        cursor: 'pointer',
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    downloadResume_About: {
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    downloadIcon_About: {
        marginLeft: '5px'
    },
    mySkillsTitle_About: {
        marginTop: '20px', 
        fontWeight: '600', 
        textShadow: `1px 1px ${theme.palette.text.primary}`
    },
    skillContainer_About: {
        padding: '10px 0'
    },
    skillName_About: {
        textTransform: 'uppercase'
    }
}));

export default useStyles;