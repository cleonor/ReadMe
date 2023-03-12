import { Button } from "@mui/material";
import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
`;

export const LoginForm = styled.form`
  width: 600px;
  height: 150px;
  background-color: #eceff1;
  border-radius: 8px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  margin: 114px 9px;
`;

export const UserInformation = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;


  #standard-number-helper-text, #standard-required-helper-text{
      margin-top: 30px;
      position: absolute;
  }
`;

export const StyledLoginButton = styled(Button)`
  margin: 0 auto;
  width: 448px;
`;