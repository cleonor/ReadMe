import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useCookies } from 'react-cookie';


const theme = createTheme({
    palette: {
        primary: {
            main: blueGrey[200],
        }
    },
});

interface INavbarProps {

}

const Navbar = (props: INavbarProps) => {
    const [cookies, setCookie, removeCookie] = useCookies(["username"]);

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
                    {cookies.username ? (<>Hello, {cookies.username} <Button
                        color="inherit"
                        onClick={() => { removeCookie("username") }}
                    >
                        LogOut
                    </Button> </>)
                        :
                        (
                            <Button
                                color="inherit"
                                onClick={() => { window.location.href = '/login' }}
                            >
                                LogIn
                            </Button>)
                    }
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    );
};
export default Navbar;