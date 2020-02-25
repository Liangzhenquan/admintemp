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
function MyAside({ menus, location }) {
  const link = 'https://github.com/Liangzhenquan';
  return (
    <Sider>
      <Logo>
        <a href={link} rel="noopener noreferrer" target="_blank">
          <LogoIcon type="github" />
        </a>
      </Logo>
      <MyMenu menus={menus} location={location} />
    </Sider>
  );
}
export default MyAside;
