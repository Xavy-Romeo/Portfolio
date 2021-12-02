import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    header_Header: {
        background: 'rgba(255,255,255,0)',
        height: '200px',
        boxShadow: 'none'
    },
    headerScroll_Header: {
        background: 'rgba(220, 235, 235,0.95)',
        height: '200px'
    }
}));

export default useStyles;