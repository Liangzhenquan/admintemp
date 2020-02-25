import React from 'react';
import { Layout, Icon } from 'antd';
import styled from 'styled-components';
import MyMenu from './MyMenu';
const { Sider } = Layout;
const Logo = styled.div`
  text-align: center;
`;
const LogoIcon = styled(Icon)`
  font-size: 1rem;
  color: #fff;
`;
export default function MyAside({ menus }) {
  return (
    <Sider>
      <Logo>
        <a
          href="https://github.com/Liangzhenquan"
          rel="noopener noreferrer"
          target="_blank"
        >
          <LogoIcon type="github" />
        </a>
      </Logo>
      <MyMenu menus={menus} />
    </Sider>
  );
}
