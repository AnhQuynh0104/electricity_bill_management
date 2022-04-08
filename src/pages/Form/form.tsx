import { Table } from "antd"
import "./Form.scss"
import MainLayout from "src/layouts/MainLayout"
import { ColumnsType } from "antd/es/table"
import { useNavigate } from "react-router-dom"
import { Form } from "reactstrap"
import { FormGroup } from "reactstrap"
import { Label } from "reactstrap"
import { Input } from "reactstrap"
import { Button } from "reactstrap"
import { Select } from "antd"
import { Option } from "rc-select"
const Form1 = () => {

    const handleButtonOnclick = () =>{
      window.confirm('Bạn có chắc muốn gửi')
    }
  return (
    <MainLayout>
     <div className="d-flex">
         <h4  style={{
             padding : '10px',

             
         }}>Đăng Kí Dùng Điện Sinh Hoạt</h4>
         <label style={{
           padding: '10px',
           color: '#b3b0ac'

         }} > Trường <span>*</span> không được để trống</label>

     </div>
     <div>
     <Form>
         <div className="row">
     <FormGroup className="col-4">
    <Label for="exampleEmail">
     Họ tên người đăng kí <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="name"
      placeholder="Nhập họ tên"
      type="text"
    />
  </FormGroup>
  <FormGroup className="col-4">
    <Label for="exampleEmail">
      Email nhận thông báo <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="Nhập email"
      type="email"
    />
  </FormGroup>
  <FormGroup className="col-4">
    <Label for="exampleEmail">
      Số điện thoại <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="phone"
      placeholder="Nhập số điện thoại"
      type="number"
    />
  </FormGroup>
  </div>

  <div className="row">
     <FormGroup className="col-4">
    <Label for="exampleEmail">
     Tỉnh/ Thành phố <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="pho"
      placeholder="Nhập tỉnh/ thành phố"
      type="text"
    />
  </FormGroup>
  <FormGroup className="col-4">
    <Label for="exampleEmail">
      Quận/ Huyện <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="huyen"
      placeholder="Nhập quận/ huyện"
      type="text"
    />
  </FormGroup>
  <FormGroup className="col-4">
    <Label for="exampleEmail">
      Phường/ Xã <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="xa"
      placeholder="Nhập phường xã"
      type="text"
    />
  </FormGroup>
  </div>
 
 <div className="row">
 <FormGroup className="col-6">
    <Label for="exampleEmail">
Nơi thường trú <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="huyen"
      placeholder="Nhập nơi thường trú"
      type="text"
    />
  </FormGroup>
  <FormGroup className="col-6">
    <Label for="exampleEmail">
      Địa chỉ dùng điện <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="xa"
      placeholder="Nhập địa chỉ"
      type="text"
    />
  </FormGroup>
 </div>
 <div className="row">
 <FormGroup className="col-3">
    <Label for="exampleEmail">
    CMND/CCCD/Hộ chiếu <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="huyen"
      placeholder="CMND/CCCD/Hộ chiếu"
      type="text"
    />
  </FormGroup>
  <FormGroup className="col-3">
    <Label for="exampleEmail">
    Ngày cấp chứng minh thư <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="xa"
      placeholder="Ngày cấp chứng minh thư"
      type="date"
    />
  </FormGroup>
  <FormGroup className="col-3">
    <Label for="exampleEmail">
    Nơi cấp <span>*</span>:
    </Label>
    <Input
      id="exampleEmail"
      name="tru"
      placeholder="Nơi cấp CMT..."
      type="text"
    />
  </FormGroup>
  <FormGroup className="col-3">
    <Label for="exampleEmail">
    Số pha  <span>*</span>:
    </Label>
    <select className="form-control">
      <option>
        1
      </option>
      <option>3</option>
    </select>
  </FormGroup>
 </div>
  <Button className="float-end" id="sendData"
  onClick={handleButtonOnclick}
  >
    Gửi Thông Tin
  </Button>
</Form>

     </div>
    </MainLayout>
  )
}

export default Form1
