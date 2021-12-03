import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    topSection_Top: {
        marginTop: '80px',
        padding: '100px 0 120px 0',
        minHeight: '100vh'
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
    imageDiv_Top: {
        height: '700px',
        display: 'flex',
        alignItems: 'center'
    },
    image_Top: {
        maxHeight: '700px',
        objectFit: 'cover'
    }

}));

export default useStyles;