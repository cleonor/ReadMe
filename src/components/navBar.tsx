import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blueGrey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[200],
    },
  },
});

interface INavbarProps {}

const Navbar = (props: INavbarProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(["username"]);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            ReadMe
          </Typography>

          <MenuItem key={"Add book"} onClick={() => console.log("Test")}>
            <Typography textAlign="left">Add Book</Typography>
          </MenuItem>
          <MenuItem key={"My books"} onClick={() => console.log("Test")}>
            <Typography textAlign="left">My Books</Typography>
          </MenuItem>

          {cookies.username ? (
            <>
              Hello, {cookies.username}
              <MenuItem
                color="inherit"
                onClick={() => {
                  removeCookie("username");
                }}>
                Logout
              </MenuItem>{" "}
            </>
          ) : (
            <MenuItem
              color="inherit"
              onClick={() => {
                window.location.href = "/login";
              }}>
              Login
            </MenuItem>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default Navbar;
