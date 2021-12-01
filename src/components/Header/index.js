import { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    const [ headerScroll, setHeaderScroll ] = useState(false);
    
    const changeHeader = () => {
        if (window.scrollY > 50) {
            setHeaderScroll(true);
        }
        else {
            setHeaderScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeHeader)
    }, []);

    return (
        <AppBar className={!headerScroll ? classes.header_Header : classes.headerScroll_Header}>
            <Toolbar>
                Header
            </Toolbar>
        </AppBar>
    );
};

export default Header;
