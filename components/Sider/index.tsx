import React from "react";
import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  LoginOutlined,
  IssuesCloseOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface Sider {
  collapsed: boolean;
  responsive: (type: boolean) => void;
}

const Index: React.FC<Sider> = ({ collapsed, responsive }) => {
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      breakpoint="xs"
      onCollapse={(collapsed) => {
        responsive(collapsed);
      }}
    >
      <div className="app-logo" />
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["dashboard"]}
      >
        <Menu.Item icon={<DashboardOutlined />} key="1">
          Dashboard
        </Menu.Item>
        <SubMenu
          key="authentication"
          icon={<LoginOutlined />}
          title="Authentication"
        >
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Register</Menu.Item>
          <Menu.Item key="4">Lockscreen</Menu.Item>
          <Menu.Item key="5">Recover password</Menu.Item>
        </SubMenu>
        <SubMenu
          key="miscellaneous"
          icon={<IssuesCloseOutlined />}
          title="Miscellaneous"
        >
          <Menu.Item key="6">Error 404</Menu.Item>
          <Menu.Item key="7">Error 500</Menu.Item>
          <Menu.Item key="8">Maintenance</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default Index;
