import { Table } from "antd"
import MainLayout from "src/layouts/MainLayout"
import { ColumnsType } from "antd/es/table"
import { useNavigate } from "react-router-dom"
import "./ElectricInfo.scss"

interface Bill {
  key: string
  id: number
  provider: string
  customerId: string
  customerName: string
  customerAddress: string
  updateAt: string
  status: string
}
const ElectricList = () => {
  const data: Bill[] = [
    {
      key: "1",
      id: 1,
      provider: "Điện lực Hà Nội",
      customerId: "EWQewqhkwqhhehw",
      customerName: "Tô Anh Tuấn",
      customerAddress: "Trần Phú, Hà Đông, Hà Nội",
      updateAt: "08-04-2022 1:45",
      status: "Chưa đóng tiền"
    },
    {
      key: "2",
      id: 1,
      provider: "Điện lực Hà Nội",
      customerId: "EWQewqhkwqhhehw",
      customerName: "Tô Anh Tuấn",
      customerAddress: "Trần Phú, Hà Đông, Hà Nội",
      updateAt: "08-04-2022 1:45",
      status: "Chưa đóng tiền"
    },
    {
      key: "3",
      id: 1,
      provider: "Điện lực Hà Nội",
      customerId: "EWQewqhkwqhhehw",
      customerName: "Tô Anh Tuấn",
      customerAddress: "Trần Phú, Hà Đông, Hà Nội",
      updateAt: "08-04-2022 1:45",
      status: "Chưa đóng tiền"
    },
    {
      key: "4",
      id: 1,
      provider: "Điện lực Hà Nội",
      customerId: "EWQewqhkwqhhehw",
      customerName: "Tô Anh Tuấn",
      customerAddress: "Trần Phú, Hà Đông, Hà Nội",
      updateAt: "08-04-2022 1:45",
      status: "Chưa đóng tiền"
    },
    {
      key: "5",
      id: 1,
      provider: "Điện lực Hà Nội",
      customerId: "EWQewqhkwqhhehw",
      customerName: "Tô Anh Tuấn",
      customerAddress: "Trần Phú, Hà Đông, Hà Nội",
      updateAt: "08-04-2022 1:45",
      status: "Chưa đóng tiền"
    }
  ]

  const columns: ColumnsType<Bill> = [
    {
      title: "STT",
      dataIndex: "id",
      width: 30,
      fixed: "left"
    },
    {
      title: "Nhà cung cấp",
      dataIndex: "provider",
      width: 30,
      fixed: "left"
    },
    {
      title: "Mã khách hàng",
      dataIndex: "customerId",
      width: 30,
      fixed: "left"
    },
    {
      title: "Địa chỉ khách hàng",
      dataIndex: "customerName",
      width: 20
    },
    {
      title: "Thời gian cập nhật",
      dataIndex: "updateAt",
      width: 50
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: 30
    },
    {
      title: "Action",
      key: "operation",

      width: 20,
      render: (text, record) => (
        <div>
          <button className="btn btn-edit" onClick={() => console.log(record)}>
            {"Sửa"}
          </button>
          <button
            className="btn btn-remove"
            onClick={() => console.log(record)}
          >
            {"Xóa"}
          </button>
        </div>
      )
    }
  ]
  const navigate = useNavigate()
  const viewCandidateDetail = () => {
    navigate(`/candidate/${data[1].id}`)
  }
  return (
    <MainLayout>
      <Table<Bill>
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1500, y: 450 }}
      />
    </MainLayout>
  )
}

export default ElectricList
