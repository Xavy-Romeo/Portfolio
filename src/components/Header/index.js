import { useState, useEffect } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import useStyles from './styles';
import Nav from '../Nav';

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
                <Grid container>
                    <Grid item xs={3}>
                        Xavy Romeo
                    </Grid>
                    <Grid item xs={7}>
                        <Nav />
                    </Grid>
                    <Grid item xs={2}>
                        <Button>
                            Hire Me
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
