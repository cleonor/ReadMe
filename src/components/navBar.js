import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[200],
        }
    },
});

const Navbar = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color={"primary"}>
                <Toolbar><h1>ReadMe</h1></Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};
export default Navbar;