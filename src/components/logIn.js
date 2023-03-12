import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import axios from "axios";
import { LoginFormContainer, LoginForm, UserInformation } from "./login.styles";
import { useCookies } from 'react-cookie';


function LogIn() {

    const authenticate = (username, password) => {
        axios.post('http://localhost:3001/login', {
            username: username,
            password: password
        }).then(() => {
            setCookie("username", username, { path: '/' })
            window.location.href = '/'
        }).catch(() => setUsernameValidation("Wrong username or passsword"));
    }
    const [, setCookie] = useCookies(["username"]);
    const [username, setUsername] = useState();
    const [usernameValidation, setUsernameValidation] = useState();
    const [password, setPassword] = useState();
    const [passwordValidation, setPasswordValidation] = useState();


    const validateInputFields = () => {
        setUsernameValidation();
        setPasswordValidation();

        if (!username) setUsernameValidation("Required field");
        if (!password) setPasswordValidation("Required field");
    }

    return (
        <>
            <LoginFormContainer>
                <LoginForm>
                    <UserInformation>
                        <label>
                            Username:
                        </label>
                        <TextField
                            id="standard-required"
                            variant="standard" type="text"
                            value={username}
                            onInput={e => setUsername(e.target.value)}
                            size="small"
                            autoComplete='off'
                            helperText={usernameValidation}

                        />
                        <label>
                            Password:
                        </label>
                        <TextField
                            id="standard-number"
                            variant="standard"
                            type="password"
                            value={password}
                            onInput={e => setPassword(e.target.value)}
                            size="small"
                            helperText={passwordValidation}

                        />
                    </UserInformation>

                    <Button variant="contained"
                        type="submit"
                        color="inherit"
                        onClick={(e) => {
                            e.preventDefault()
                            validateInputFields()
                            if (username && password) {
                                authenticate(username, password)
                            }
                        }}
                    >LogIn</Button>
                </LoginForm>
            </LoginFormContainer>
        </>
    );
}

export default LogIn;