import React, { useContext, useState } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  LineText,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from './accountContext';
import axios from "axios";

export function LoginForm(props) {


  const [uname, setUname] = useState('')
  const [pswd, setPswd] = useState('')

  const { switchToSignup } = useContext(AccountContext);

  const signInBtnClick = async () => {
    // alert(`Username : ${uname} && Passwaord : ${pswd}`);
    const user = await userRequest({ user: uname, pass: pswd });
    setUname('');
    setPswd('');

  }

  const forgetPassword = () => {
    alert('forget password click');
  }

  const userRequest = async ({ user, pass }) => {
    try {

      let config = {
        method: 'post',
        url: 'http://localhost:8000/login',
        headers: {},
        data: {
          user, pass
        }
      };
      console.log('user,pass :>> ',config);
      const data = await axios(config);
      console.log('data :>> ', data);

    } catch(e) {
      console.log('e :>> ', e);
    }
  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" onChange={(e) => setUname(e.target.value)} value={uname} />
        <Input type="password" placeholder="Password" onChange={(e) => setPswd(e.target.value)} value={pswd} />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#" onClick={forgetPassword}>Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={signInBtnClick}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="5px" />
      <LineText>
        Don't have an accoun?{" "}
        <BoldLink onClick={switchToSignup} href="#">
          Signup
        </BoldLink>
      </LineText>
    </BoxContainer>
  );
}