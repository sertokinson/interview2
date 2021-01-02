import {Layout, Menu, PageHeader, Checkbox, Progress} from 'antd';
import React from "react";
import 'antd/dist/antd.css';
import {content} from "./content";
import GetContent from "./GetContent";

const {Header, Content, Sider} = Layout;

export default class App extends React.Component {
    state = {
        header: content[0].header
    };

    render() {
        return (
            <Layout style={{minHeight: '100vh'}}>
                <Sider>
                    <div className="logo"/>
                    <Menu theme="dark" defaultSelectedKeys={['0']} mode="inline">
                        {content.map((value, key) => {
                            const {header} = value;
                            return <Menu.Item onClick={() => this.setState({header})} key={key}>
                                <Checkbox onChange={e => content[key].checked = e.target.checked}
                                          style={{marginRight: 10}}/>{header}
                            </Menu.Item>
                        })}
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                        <PageHeader title={this.state.header}>
                            <Progress percent={content.filter((value => value.checked)).length * 100 / content.length}/>
                        </PageHeader>
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            marginTop: 60,
                            padding: 24,
                            minHeight: 280
                        }}
                    >
                        <GetContent>{this.state.header}</GetContent>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}