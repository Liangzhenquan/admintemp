import React, { Component } from 'react';
import { Layout } from 'antd';
import MyAside from './MyAside';
import { RouteWithSubRoutes, menus } from '@/router';
import { post } from '@/api';
import styled from 'styled-components';
import Header from './MyHeader';
const { Content } = Layout;
const Card = styled.div`
  min-height: calc(100% - 0.4rem);
  margin: 0.2rem;
  border-radius: 2px;
  background-color: #fff;
`;
export default class MyLayout extends Component {
  componentWillMount() {
    this.hasPermission();
  }
  hasPermission = async () => {
    post('check');
  };
  render() {
    const { routes, location } = this.props;
    return (
      <Layout>
        <MyAside menus={menus} location={location} />
        <Layout>
          <Header />
          <Content>
            <Card>
              <RouteWithSubRoutes routes={routes} />
            </Card>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
