import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    listItem_Nav: {
        listStyleType: 'none',
    },
    navLink_Nav: {
        margin: '0 15px',
        padding: '5px',
        textDecoration: 'none'
    },
    navLinkSpan_Nav: {
        color: theme.palette.primary.contrastText,
    }
}));

export default useStyles;