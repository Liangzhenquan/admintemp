import React, { useState } from 'react';
import styled from 'styled-components';
import { Input, Button } from 'antd';
const Section = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f4;
`;
const LoginBox = styled.div`
  width: 8.412rem;
  height: auto;
  padding: 0.72rem 1.56rem;
  box-sizing: border-box;
  border-radius: 2px;
  box-shadow: 0 0.1rem 0.2rem rgba(0, 0, 0, 0.12);
  background-color: #fff;
  text-align: center;
`;
const Title = styled.h2`
  font-size: 0.6rem;
  font-weight: bold;
`;
const PwdInput = styled(Input)`
  margin: 0.4rem auto;
`;
const LoginButton = styled(Button)`
  width: 2.4rem;
  height: 0.68rem;
  border: none;
  border-radius: 0.08rem;
`;
export default function Login() {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const changeName = e => {
    setUsername(e.target.value);
  };
  const changePwd = e => {
    setPwd(e.target.value);
  };
  const login = () => {
    console.log(username);
    console.log(pwd);
  };
  return (
    <Section>
      <LoginBox>
        <Title>ADMIN</Title>
        <Input
          onChange={changeName}
          value={username}
          prefix={<i className="iconfont icon-denglu"></i>}
        />
        <PwdInput
          onChange={changePwd}
          value={pwd}
          prefix={<i className="iconfont icon-mima"></i>}
        />
        <LoginButton onClick={login} type="primary">
          登录
        </LoginButton>
      </LoginBox>
    </Section>
  );
}
