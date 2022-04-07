import { Table, Button, Modal } from "antd"
import MainLayout from "src/layouts/MainLayout"
import { ColumnsType } from "antd/es/table"
import { useState } from "react"

interface Bill {
  key: string
  id: number
  name: string
  status: string
  price: string
}

const BillList = () => {
  const data: Bill[] = [
    {
      key: "1",
      id: 1,
      name: "Nguyễn Quỳnh Anh",
      status: "Đã đóng",
      price: "1.000.000VNĐ"
    },
    {
      key: "2",
      id: 2,
      name: "Nguyễn Quỳnh Anh",
      status: "Đã đóng",
      price: "1.000.000VNĐ"
    },
    {
      key: "3",
      id: 3,
      name: "Nguyễn Quỳnh Anh",
      status: "Chưa đóng",
      price: "1.000.000VNĐ"
    },
    {
      key: "4",
      id: 4,
      name: "Nguyễn Quỳnh Anh",
      status: "Đã đóng",
      price: "1.000.000VNĐ"
    },
    {
      key: "5",
      id: 5,
      name: "Nguyễn Quỳnh Anh",
      status: "Chưa đóng",
      price: "1.000.000VNĐ"
    }
  ]

  const columns: ColumnsType<Bill> = [
    {
      title: "Tên",
      dataIndex: "name",
      width: 30,
      fixed: "left"
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: 20,
      filters: [
        { text: "Chưa đóng", value: "Chưa đóng" },
        { text: "Đã đóng", value: "Đã đóng" }
      ]
    },
    {
      title: "Số tiền",
      dataIndex: "price",
      width: 20
    }
  ]

  const [isModalVisible, setIsModalVisible] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <MainLayout>
      <Table<Bill>
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ y: 450 }}
      />
      <Button type="primary" onClick={showModal}>
        Xuất Báo cáo
      </Button>
      <Modal
        title="XUẤT BÁO CÁO"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Thoát"
        okText="Xuất"
      >
        <strong>Thời gian</strong>: 9/3/2022 - 9/4/2022 <br></br>
        <strong>Số người đã nộp tiền</strong>: 10/15 <br></br>
        <strong>Số người chưa nộp tiền</strong>: 5/15 <br></br>
        <strong>Số tiền đã thu</strong>: 5.000.00VNĐ
      </Modal>
    </MainLayout>
  )
}

export default BillList
