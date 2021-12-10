import { useEffect } from 'react';

import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Nav = () => {
    const classes = useStyles();

    const navLinks = [
        {name: 'Home', href: '#home'},
        {name: 'About Me', href: '#about'},
        {name: 'Portfolio', href: '#portfolio'},
        // {name: 'Resume', href: '#resume'},
        {name: 'Contact Me', href: '#contact'},
    ];

    const setActiveSection = () => {
        const links = document.querySelectorAll('.nav-link');
        const sections = document.querySelectorAll('section');
        let length = sections.length;

        while(--length && window.scrollY + 80 < sections[length].offsetTop){}
        links.forEach(link => link.classList.remove('activeLink'));
        links[length].classList.add('activeLink');
    };

    useEffect(() => {
        window.addEventListener('scroll', setActiveSection);        
    }, []);

    return (
        <nav>
            <Box className={classes.container_Nav}>
                <ul>
                    <Grid container >
                        {navLinks.map((link, index) => (
                            <li className={classes.listItem_Nav} key={index}>
                                <a 
                                    href={link.href}
                                    className={`${classes.navLink_Nav} nav-link`}
                                >
                                    <Typography className={`${classes.navLinkSpan_Nav} nav-link-span`} variant='caption' component='span'>
                                        {link.name}
                                    </Typography>
                                </a>
                            </li>
                        ))}
                    </Grid>
                </ul>
            </Box>
        </nav>
    );
};

export default Nav;