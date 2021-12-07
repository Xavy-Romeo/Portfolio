import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    header_Header: {
        background: 'rgba(255,255,255,0)',
        height: '80px',
        boxShadow: 'none',
        justifyContent: 'center'
    },
    headerScroll_Header: {
        background: 'rgba(220, 235, 235,0.7)',
        height: '80px',
        justifyContent: 'center'
    },
    toolbar_Header: {
        margin: '0',
        header: '0'
    },
    titleLink_Header:{
        textDecoration: 'none',
       
    },
    headerTitle_Header: {
        paddingBottom: '5px',
        fontFamily: 'Kaushan Script, sans-sefif',
        fontWeight: 'bold',
        textShadow: `2px 2px black`,
        transition: '.3s',
        '&:hover': {
            textShadow: '3px 3px rgb(40,40,40)',
            transition: '.3s'
        }
    },
    navContainer_Header: {
        display: 'flex', 
        justifyContent: 'flex-end',
        paddingRight: '50px'
    },
    hireMeBtnLink_Header:{
        textDecoration: 'none'
    },
    hireMeBtn_Header: {
        color: 'rgb(220,235,235)',
        fontSize: '20px',
        fontWeight: 'medium', 
        borderRadius: '50px 0 50px 50px',
        width: '130px',
        height: '50px',
        background: 'rgb(246,79,89)',
        textAlign: 'center',
        textTransform: 'capitalize',
        '&:hover': {
            boxShadow: '0px 15px 20px 0px rgba(77, 65, 225, 0.15)',
            background: 'rgb(231,64,74)'
        }
    }
}));

export default useStyles;