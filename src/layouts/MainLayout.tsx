import React, { ReactNode, useState } from "react"
import { Layout, Menu, Breadcrumb, Dropdown } from "antd"
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined
} from "@ant-design/icons"
import "./MainLayout.scss"
import { useNavigate } from "react-router-dom"

const { SubMenu, Item } = Menu
const { Header, Content, Sider } = Layout

interface Props {
  children: ReactNode
}

export default function MainLayout(props: Props) {
  const { children } = props
  const [collapsed, setCollapsed] = useState(false)

  let navigate = useNavigate()

  const onToggle = () => {
    setCollapsed(!collapsed)
  }

  const handleOnClickListCandidate = () => {
    navigate("/customerlist")
  }

  return (
    <Layout>
      <Header className="header">
        <div className="header-logo">Nhóm 13</div>
        <div className="header-main">
          {collapsed ? (
            <MenuUnfoldOutlined onClick={onToggle} />
          ) : (
            <MenuFoldOutlined onClick={onToggle} />
          )}
          <Dropdown
            overlay={
              <Menu key="dropdown">
                <Item key="dropdown-1">Tài Khoản</Item>
                <Item key="dropdown-2">Đăng Xuất</Item>
              </Menu>
            }
            placement="bottomRight"
            arrow
          >
            <p>Admin</p>
          </Dropdown>
        </div>
      </Header>
      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>Trang Chủ</Breadcrumb.Item>
          <Breadcrumb.Item>Quản Lý Tiền Điện</Breadcrumb.Item>
          <Breadcrumb.Item>Danh Sách Khách Hàng</Breadcrumb.Item>
        </Breadcrumb>
        <Layout>
          <Sider
            className="site-layout-background"
            trigger={null}
            collapsible
            collapsed={collapsed}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              className="sider-menu"
            >
              <SubMenu
                key="sub1"
                icon={<UserOutlined />}
                title="Quản Lý Ứng Viên"
              >
                <Item key="1" onClick={handleOnClickListCandidate}>
                  Danh Sách Khách Hàng
                </Item>
                <Item key="2">Thêm Sửa Xóa</Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="content">{children}</Content>
        </Layout>
      </Content>
    </Layout>
  )
}
