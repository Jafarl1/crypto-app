import { FC } from "react";
import { Layout } from "antd";
import { headerStyle, siderStyle, contentStyle } from "./styles";

const { Header, Sider, Content } = Layout;

const MainLayout: FC = () => {
  return (
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Layout>
        <Sider width="25%" style={siderStyle}>
          Sider
        </Sider>
        <Content style={contentStyle}>Content</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
