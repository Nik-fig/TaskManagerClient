import React, {FC} from 'react';
import {Form, Input, Button} from "antd";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import axios from "axios";

import styles from './LoginForm.module.css'

interface LoginFormProps {
}

type Props = LoginFormProps;

export const LoginForm: FC<Props> = ({}) => {
    const SendRequest = () => {
        axios.get('http://localhost:5175/')
            .then(result => console.log(result))
            .catch(err => console.error(err))
    }

    return (
        <Form
            className={styles.Form}
            size={'large'}
            onFinish={SendRequest}
        >
            <Form.Item
                name="login"
                rules={[{required: true, message: 'Please input your Username!'}]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password
                    prefix={<LockOutlined/>}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                >
                    Войти
                </Button>
            </Form.Item>
        </Form>
);
};
