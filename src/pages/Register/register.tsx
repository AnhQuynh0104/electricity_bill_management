import { Alert, Table } from "antd"
import MainLayout from "src/layouts/MainLayout"
import { ColumnsType } from "antd/es/table"
import { useNavigate } from "react-router-dom"
import "./register.scss"
import { CardImg } from "react-bootstrap"
import React from "react"
import { Card } from "reactstrap"
import { CardBody } from "reactstrap"
import { CardTitle } from "reactstrap"
import { CardSubtitle } from "reactstrap"
import { CardText } from "reactstrap"
import { Button } from "reactstrap"



// const handleClick =() =>{
//     navigate('/')
// }
const Register =() => {

  const navigate = useNavigate()
  const handleOnclick = ()=>{
    navigate("/registerForm")
  }
    return (
      <MainLayout>
        <div className="d-flex " >
 
        <div
      
        style={{
          width: '40%',
          margin: '10px'
        }}
        >
        <Card className="def" onClick={()=> handleOnclick()
        }
        style={{
          backgroundColor: '',
          borderRadius: '7%',
          boxShadow:'0px 3px 3px 2px'

        }}
        >
          <CardBody>
            <CardTitle tag="h5" style={{
              padding : '30px'
            }}>
              Điện Cao Áp
            </CardTitle>
            {/* <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText> */}
            <a>
              Xem Chi Tiết
            </a>
          </CardBody>
        </Card>
      </div>
      <div
      
        style={{
          width: '40%',
          margin: '10px'
        }}
        >
        <Card className="def" onClick={()=> handleOnclick()
        }
        style={{
          backgroundColor: '',
          borderRadius: '7%',
          boxShadow:'0px 3px 3px 2px'

        }}
        >
          <CardBody>
            <CardTitle tag="h5" style={{
              padding : '30px'
            }}>
              Điện Hạ Áp
            </CardTitle>
            {/* <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText> */}
            <a>
              Xem Chi Tiết
            </a>
          </CardBody>
        </Card>
      </div>
               
      </div>
      </MainLayout>
      )
}
export default Register