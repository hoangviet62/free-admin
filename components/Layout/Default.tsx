import React from "react";
import { Layout, Menu } from "antd";

const { Header, Footer, Sider, Content } = Layout;
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const Default: React.FC = ({ children }) => {
  return (
    <Layout>
      <Sider trigger={null} collapsible>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0 }} />
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            height: "100%",
          }}
        >
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Default;
