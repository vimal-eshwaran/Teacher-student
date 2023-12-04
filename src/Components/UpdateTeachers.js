import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Base from '../Base/Base';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
function UpdateTeachers({teachers,setTeachers}){
    const {id} = useParams();
    const editTeachers = teachers[id]
    const [name, setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender, setGender] = useState("")
    const [qualification, setQualification] = useState("")
    const history = useHistory();

    useEffect(()=>{
       setName(editTeachers.name)
       setBatch(editTeachers.batch)
       setGender(editTeachers.gender)
       setQualification(editTeachers.qualification)
    }, [editTeachers])

    function updateTeachers (){
         const updatedObject = {
            name : name,
            batch : batch,
            gender: gender,
            qualification :qualification
         }
     
         console.log(updatedObject)
         teachers[id] = updatedObject
         setTeachers([...teachers])
         history.push("/teachers")
     }
    
    
    return(
        <Base
    title={"Edit a Teacher"}
    description={"Edit Teachers data here"}
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
    onClick={updateTeachers}
    >Update Students</Button>
</div>
</Base>
    )
}
export default UpdateTeachers