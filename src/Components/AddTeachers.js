import React, { useState } from 'react'
import Base from '../Base/Base'
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';


function AddTeachers({teachers,setTeachers}){
    const history = useHistory()
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")

const createTeachers =  () =>{
    // creating object from input states
    const newTeachers = {
      name:name,
      batch:batch,
      qualification:qualification,
      gender: gender,
}


  setTeachers([...teachers, newTeachers])
  history.push("/teachers")
}
  return(
    <Base
    title={"Add New Teacher"}
    description={"We can able to add new teacher data here"}
    >
    <div>
        <input
        placeholder='Enter Name'
        type ="text"
        value = {name}
        onChange={(e)=>setName(e.target.value)}
        />
        <input
        placeholder='Enter Batch'
        type ="text"
        value ={batch}
        onChange={(e)=>setBatch(e.target.value)}
        />

        <input
        placeholder='Enter Gender'
        type ="text"  
        value ={gender}
        onChange={(e)=>setGender(e.target.value)}
        />

        <input
        placeholder='Enter Qualification'
        type ="text" 
        value= {qualification}
        onChange={(e)=>setQualification(e.target.value)}
        />

        <Button variant='primary'
        onClick={createTeachers}
        >Add Teachers</Button>
    </div>
    </Base>
    )
}
export default AddTeachers