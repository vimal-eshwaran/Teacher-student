import React from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
//function
function Nopage() {
    const history = useHistory()
  return (
   <Base
   title={"404 NO Page Content"}
   description={"Wrong url please click below button"}
   >
    <Button variant='primary'
    onClick={()=>history.push("/")}
    >
        Go to DashBoard
    </Button>
   </Base>
  )
}

export default Nopage