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

  const handleOnClickListCustomer = () => {
    navigate("/customerlist")
  }

  const handleOnClickListBill = () => {
    navigate("/billlist")
  }
  const handleOnClickElectricInfo = () => {
    navigate("/electricinfo")
  }
  const handleOnClickPayGate = () => {
    navigate("/paygate")
  }
  const handleOnCLickEmailCustomer = () => {
    navigate("/emailtocustomer")
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
              <SubMenu key="sub1" title="Theo Dõi Khách Hàng">
                <Item key="1" onClick={handleOnClickListCustomer}>
                  Danh Sách Khách Hàng
                </Item>
              </SubMenu>
              <SubMenu key="sub2" title="Xem Hóa Đơn">
                <Item key="2" onClick={handleOnClickListBill}>
                  Danh Sách Hóa Đơn
                </Item>
              </SubMenu>
              <SubMenu key="sub3" title="Đóng tiền điện">
                <Item key="1" onClick={handleOnClickElectricInfo}>
                  Thông tin tiền điện tháng này
                </Item>
                <Item key="2" onClick={handleOnClickPayGate}>
                  Cổng thanh toán
                </Item>
              </SubMenu>
              <SubMenu key="sub4" title="Chăm sóc khách hàng">
                <Item key="1" onClick={handleOnCLickEmailCustomer}>
                  Thông báo cho khách hàng qua mail
                </Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="content">{children}</Content>
        </Layout>
      </Content>
    </Layout>
  )
}
