import React,{useState}  from 'react';
import { Menu } from 'antd';
import {HomeOutlined,UserOutlined,UserAddOutlined, 
    SettingOutlined } from '@ant-design/icons';

import {Link} from 'react-router-dom'
const { SubMenu,Item } = Menu;

export const Header = () => {
    const [current, setCurrent] = useState('home');

    const handleClick  = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        <Item key="home" icon={<HomeOutlined />}>
         <Link to="/">Home</Link> 
        </Item>
        <SubMenu  icon={<SettingOutlined />} title="username">
         
            <Item key="setting:1">Option 1</Item>
            <Item key="setting:2">Option 2</Item>
         
        </SubMenu>
        <Item key="login"icon={<UserOutlined />}>
        <Link to="/login">Login</Link>
        </Item>
        <Item key="register"icon={<UserAddOutlined />}>
          <Link to="/register">Register </Link>
        </Item>
      </Menu>
    </div>
  )
}
