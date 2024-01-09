import { FC, useState, useEffect } from 'react'
import { useLocation, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components'

// ui lib
import { Badge, TabBar } from 'antd-mobile'
import {
  AppOutline,
  MessageOutline,
  MessageFill,
  UnorderedListOutline,
  UserOutline
} from 'antd-mobile-icons'

// components

// hooks

// options
const tabs = [
  {
    key: '/',
    title: '首页',
    icon: <AppOutline />,
    badge: Badge.dot
  },
  {
    key: '/me',
    title: '我的',
    icon: <UserOutline />
  }
]

// ==============================|| TEMPLATE ||============================== //
interface IIndex {}

const Index: FC<IIndex> = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    return () => {}
  }, [])

  const navigateRoute = (url: string) => {
    navigate(url)
  }

  return (
    <Wrap>
      <div className="layout-content">
        <Outlet />
      </div>
      <div className="layout-footer">
        <TabBar activeKey={pathname} onChange={value => navigateRoute(value)}>
          {tabs.map(item => (
            <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
          ))}
        </TabBar>
      </div>
    </Wrap>
  )
}

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .layout-content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 13.3333vw;
  }

  .layout-footer {
    width: 100%;
    background-color: #fff;
    position: fixed;
    bottom: 0;
    border-top: solid 1px var(--adm-color-border);
  }
`

export default Index
