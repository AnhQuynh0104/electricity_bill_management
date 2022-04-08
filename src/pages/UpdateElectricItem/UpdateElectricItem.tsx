import { Table } from "antd"
import MainLayout from "src/layouts/MainLayout"
import { ColumnsType } from "antd/es/table"
import { useNavigate } from "react-router-dom"
import { Input } from "reactstrap"
import {
    EditOutlined
  } from "@ant-design/icons"
import { Button } from "reactstrap"
interface Household {
    key: string
    id: number
    name: string
    oldNumber: number
    address: string
    school: string
    gmail: string
    phone: string
  }

const UpdateElectricItem = () => {
  const handleOnclickUpdate = ()=>{
    let a = document.getElementById('newNumber');
    console.log()
    window.confirm('Bạn có muốn cập nhật')
  }
    const data: Household[] = [
        {
          key: "1",
          id: 1,
          name: "Nguyen Quynh Anh",
          oldNumber: 323,
          address: "New York No. 1 Lake Park",
          school: "Ha Noi",
          phone: "0993993933",
          gmail: "abc@gmail.com"
        },
        
      ]
    
    
      return (
        <MainLayout>
          <div className="row">
          <div className="col-3">

          </div>
          <div className="col-6 row">
            <table className="table-primary col-12"style={{
              backgroundColor: '',
              borderRadius: '7%',
              boxShadow:'0px 3px 3px 2px'

            }}>
              <tr>
                <td>Tên</td>
                <td>{data[0].name}</td>
              </tr>
              <tr>
              <td>Địa Chỉ</td>
              <td>{data[0].address}</td>
              </tr>
              <tr>
              <td>Số Điện Thoại</td>
              <td>{data[0].phone}</td>
              </tr>
                <tr>
                <td>Số Điện Cũ</td>
                <td>{data[0].oldNumber}</td>
                </tr>
                <tr>
                <td>Số Điện Mới</td>
                <td>
                  <Input
                  id="newNumber"
                  type="number"
                  placeholder="Nhập số điện mới"
                  />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td> 
                    <Button className="float-end " style={{
                      margin: '10px',
        backgroundImage: 'linear-gradient(to right, rgb(231, 23, 23) , rgb(228, 37, 186))'

                    }}
                     onClick ={handleOnclickUpdate}>
                    
        
                 Cập nhật
               </Button></td>
                </tr>
              
            </table>
          </div>
          </div>
        </MainLayout>
      )
}

export default UpdateElectricItem
