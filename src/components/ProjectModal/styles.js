import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    mainModalContainer_ProjectModal: {
        borderRadius: '5px',
        padding: '50px 80px',
        background: 'linear-gradient(145deg,rgba(205,235,235,1),rgba(255,255,255,1))', 
        boxShadow: theme.shadows[10]
    },
    modalContainer_ProjectModal: {

    },
    imgContainer_ProjectModal: {
        width: '60%', 
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
    }
}));

export default useStyles;