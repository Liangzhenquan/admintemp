import React, { useState } from 'react';
import styled from 'styled-components';
import { Layout, Icon, Badge, Dropdown, Menu, Avatar } from 'antd';
const { Header } = Layout;
const HeaderWrap = styled(Header)`
  display: flow-root;
  zoom: 1;
`;
const MesLink = styled.a`
  color: #000;
`;
const Right = styled.div`
  float: right;
  display: flex;
  align-items: center;
`;
const AvatarWrap = styled.div`
  margin-left: 0.4rem;
`;
export default function MyHeader() {
  const [link, setLink] = useState(
    'https://github.com/Liangzhenquan/admintemp.git'
  );
  const logOut = () => {
    window.location.href = '/login';
    localStorage.clear();
  };
  const menu = (
    <Menu>
      <Menu.ItemGroup title="用户设置">
        <Menu.Divider />
        <Menu.Item>
          <Icon type="edit" />
          个人设置
        </Menu.Item>
        <Menu.Item>
          <Icon theme="filled" type="setting" />
          系统设置
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.Divider />
      <Menu.Item onClick={logOut}>
        <span>
          <Icon type="logout" /> 退出登录
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <HeaderWrap>
      <Right>
        <Badge dot offset={[-2, 0]}>
          <MesLink href={link}>
            <Icon type="bell" />
          </MesLink>
        </Badge>
        <AvatarWrap>
          <Dropdown overlay={menu} overlayStyle={{ width: '150px' }}>
            <Avatar icon="user" size={30} style={{ cursor: 'pointer' }} />
          </Dropdown>
        </AvatarWrap>
      </Right>
    </HeaderWrap>
  );
}
