import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    header_Header: {
        background: 'rgba(255,255,255,0)',
        height: '80px',
        boxShadow: 'none'
    },
    headerScroll_Header: {
        background: 'rgba(220, 235, 235,0.95)',
        height: '80px'
    }
}));

export default useStyles;