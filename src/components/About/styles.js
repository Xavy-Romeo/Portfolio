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
        height: '450px'
    },
    profileImg_About: {
        borderRadius: '30%', 
        boxShadow: '5px 5px 15px rgb(255,255,255),-5px -5px 15px rgb(255,255,255)'
    },
    aboutText_About: {
        marginBottom: '10px', 
        letterSpacing: '1.25px'
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