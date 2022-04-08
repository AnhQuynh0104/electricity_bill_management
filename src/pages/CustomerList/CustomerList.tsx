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
  school: string
  gmail: string
}

const CustomerList = () => {
  const data: Person[] = [
    {
      key: "1",
      id: 1,
      name: "Nguyen Quynh Anh",
      age: 32,
      address: "New York No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "2",
      id: 2,
      name: "Jim",
      age: 42,
      address: "London No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "3",
      name: "Joe",
      id: 3,
      age: 32,
      address: "Sidney No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "4",
      name: "Joe",
      id: 4,
      age: 32,
      address: "Sidney No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "5",
      name: "Joe",
      id: 5,
      age: 32,
      address: "Sidney No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "6",
      name: "Joe",
      id: 6,
      age: 32,
      address: "Sidney No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "7",
      name: "Joe",
      id: 7,
      age: 32,
      address: "Sidney No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "8",
      name: "Joe",
      id: 8,
      age: 32,
      address: "Sidney No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "9",
      name: "Joe",
      id: 9,
      age: 32,
      address: "Sidney No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    },
    {
      key: "10",
      name: "Joe",
      id: 10,
      age: 32,
      address: "Sidney No. 1 Lake Park",
      school: "Ha Noi",
      gmail: "abc@gmail.com"
    }
  ]

  const columns: ColumnsType<Person> = [
    {
      title: "Name",
      dataIndex: "name",
      width: 50,
      fixed: "left"
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 20
    },
    {
      title: "Address",
      dataIndex: "address",
      width: 70
    },
    {
      title: "School",
      dataIndex: "school",
      width: 70
    },
    {
      title: "Gmail",
      dataIndex: "gmail",
      width: 70
    },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 55,
      render: (text, record) => (
        <div>
          <button
            className="btn btn-view"
            onClick={() => viewCandidateDetail()}
          >
            {"View"}
          </button>
          <button className="btn btn-edit" onClick={() => console.log(record)}>
            {"Edit"}
          </button>
          <button
            className="btn btn-remove"
            onClick={() => console.log(record)}
          >
            {"Remove"}
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
