import React, { useEffect, useState } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { SubMenu } = Menu;
const renderMenuItem = menu => {
  return (
    <Menu.Item key={menu.key}>
      {/* <Icon type={menu.icon} /> */}
      <Link to={menu.key}>
        <Icon type={menu.icon} />
        {menu.title}
      </Link>
    </Menu.Item>
  );
};
const renderSub = menus => {
  return (
    <SubMenu
      key={menus.key}
      title={
        <span>
          <Icon type={menus.icon} />
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
function MyMenu({ menus, location }) {
  const [selectedKeys, setSelectedKeys] = useState(null);
  const [openKeys, setOpenKeys] = useState(null);
  useEffect(() => {
    setSelectedKeys([location.pathname]);
    setOpenKeys(['/item']);
  }, [location.pathname]);
  return (
    <Menu
      theme="dark"
      // openKeys={openKeys}
      selectedKeys={selectedKeys}
      mode="inline"
    >
      {menus.map((menu, i) =>
        menu.sub ? renderSub(menu) : renderMenuItem(menu)
      )}
    </Menu>
  );
}
export default MyMenu;
