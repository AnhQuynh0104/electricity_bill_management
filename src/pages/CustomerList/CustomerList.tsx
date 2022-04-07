import { Table } from "antd"
import MainLayout from "src/layouts/MainLayout"
import { ColumnsType } from "antd/es/table"
import { useNavigate } from "react-router-dom"
import "./CustomerList.scss"

interface Person {
  key: string
  id: number
  name: string
  age: number
  address: string
  status: string
  gmail: string
}

const CustomerList = () => {
  const data: Person[] = [
    {
      key: "1",
      id: 1,
      name: "Nguyễn Quỳnh Anh",
      age: 22,
      address: "Gia Lâm, Hà Nội",
      status: "Đã đóng",
      gmail: "abc@gmail.com"
    },
    {
      key: "2",
      id: 2,
      name: "Nguyễn Quỳnh Anh",
      age: 22,
      address: "Gia Lâm, Hà Nội",
      status: "Đã đóng",
      gmail: "abc@gmail.com"
    },
    {
      key: "3",
      id: 3,
      name: "Nguyễn Quỳnh Anh",
      age: 22,
      address: "Gia Lâm, Hà Nội",
      status: "Đã đóng",
      gmail: "abc@gmail.com"
    },
    {
      key: "4",
      id: 4,
      name: "Nguyễn Quỳnh Anh",
      age: 22,
      address: "Gia Lâm, Hà Nội",
      status: "Chưa đóng",
      gmail: "abc@gmail.com"
    },
    {
      key: "5",
      id: 5,
      name: "Nguyễn Quỳnh Anh",
      age: 22,
      address: "Gia Lâm, Hà Nội",
      status: "Đã đóng",
      gmail: "abc@gmail.com"
    },
    {
      key: "6",
      id: 6,
      name: "Nguyễn Quỳnh Anh",
      age: 22,
      address: "Gia Lâm, Hà Nội",
      status: "Đã đóng",
      gmail: "abc@gmail.com"
    }
  ]

  const columns: ColumnsType<Person> = [
    {
      title: "Tên",
      dataIndex: "name",
      width: 30,
      fixed: "left"
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      width: 20
    },
    {
      title: "Địa chỉ",
      dataIndex: "address",
      width: 50
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      width: 30
    },
    {
      title: "Gmail",
      dataIndex: "gmail",
      width: 40
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
      <Table<Person>
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 10 }}
        scroll={{ x: 1500, y: 450 }}
      />
    </MainLayout>
  )
}

export default CustomerList
