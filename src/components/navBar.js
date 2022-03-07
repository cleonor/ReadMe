import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
                <Toolbar>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >
                        ReadMe
                    </Typography>
                    <Button color="inherit">Signup</Button>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};
export default Navbar;