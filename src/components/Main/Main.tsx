import React, {FC} from 'react';
import {Layout, Space} from "antd";

import {LoginForm} from '../LoginForm/LoginForm';
import style from './Main.module.css';

const {Header, Sider, Content, Footer} = Layout;

interface MainProps {
}

type Props = MainProps;

export const Main: FC<Props> = ({}) => {
    return (
        <Layout
            className={style.Main}
        >
            <Header>

            </Header>
            <Content className={style.Content}>
                <LoginForm/>
            </Content>
            <Footer>

            </Footer>
        </Layout>
    );
};
