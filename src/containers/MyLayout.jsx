import React, { Component } from 'react';
import { Layout } from 'antd';
import MyAside from './MyAside';
import { RouteWithRoutes, RouteWithSubRoutes, menus } from '@/router';
import { Switch, Route } from 'react-router-dom';
const { Header, Footer, Content } = Layout;
export default class MyLayout extends Component {
  render() {
    const { routes } = this.props;
    return (
      <Layout>
        <MyAside menus={menus} />
        <Layout>
          <Header>Header</Header>
          <Content>
            {/* <Switch>
              {routes.map((route, i) => (
                <RouteWithRoutes key={i} {...route} />
              ))}
            </Switch> */}
            <RouteWithSubRoutes routes={routes} />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    );
  }
}
