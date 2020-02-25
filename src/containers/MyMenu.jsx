import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const renderMenuItem = menu => {
  return (
    <Menu.Item key={menu.title}>
      <Link to={menu.key}>{menu.title}</Link>
    </Menu.Item>
  );
};
const renderSub = menus => {
  return (
    <SubMenu
      title={
        <span>
          <Icon type="mail" />
          <span>{menus.title}</span>
        </span>
      }
    >
      {menus.sub.map((menu, i) => renderMenuItem(menu))}
    </SubMenu>
  );
  // console.log('sub', menus);
  // return null;
};
export default function MyMenu({ menus }) {
  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      {menus.map((menu, i) =>
        menu.sub ? renderSub(menu) : renderMenuItem(menu)
      )}
      {/* <SubMenu
        key="sub1"
        title={
          <span>
            <Icon type="mail" />
            <span>Navigation One</span>
          </span>
        }
      >
        <Menu.Item key="1">Option 1</Menu.Item>
        <Menu.Item key="2">Option 2</Menu.Item>
        <Menu.Item key="3">Option 3</Menu.Item>
        <Menu.Item key="4">Option 4</Menu.Item>
      </SubMenu> */}
    </Menu>
  );
}
