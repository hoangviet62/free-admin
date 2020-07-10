import React from "react";
import { Layout, Button } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import Sider from "./../Sider";
import less from "less";
import "../../public/less/Default.less";

const { Header, Footer, Content } = Layout;

const Default: React.FC = ({ children }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  const onCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout>
      <Sider collapsed={collapsed} responsive={(type) => setCollapsed(type)} />
      <Layout>
        <Header className="app-header">
          <Button
            type="default"
            icon={<MenuFoldOutlined />}
            onClick={onCollapsed}
          />
        </Header>
        <Content className="app-content">{children}</Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default Default;
