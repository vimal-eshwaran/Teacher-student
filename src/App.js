import { Switch,Route } from 'react-router-dom';
import './App.css';
import data from './Data/data';
import Students from './Components/Students.js';
import AddStudents from './Components/AddStudents';
import UpdateStudents from './Components/UpdateStudents';
import {useState } from 'react';
import Nopage from './Components/Nopage';
import DashBoard from './Components/Dashboard';
import { Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teachers from './Components/Teachers';
import AddTeachers from './Components/AddTeachers';
import UpdateTeachers from './Components/UpdateTeachers';
import datas from './Data/datas';

function App() {
  const [students, setStudents] = useState(data);
  const [teachers,setTeachers]=useState(datas);
  
return (
    <div className="App">
       <Switch>
        {/* Exact path first page to load */}
         <Route exact path="/">
             <DashBoard/>
         </Route>

          <Route path="/students">
            <Students
            students = {students}
            setStudents ={setStudents}
            />
          </Route>

          <Route path="/details">
             <Redirect to ="/students"/>
          </Route>

         <Route path="/add">
            <AddStudents
            students = {students}
            setStudents ={setStudents}
            />
         </Route>

         <Route path="/edit/:id">
            <UpdateStudents
              students = {students}
              setStudents ={setStudents}
            />
         </Route>

         <Route path="/teachers">
            <Teachers
            teachers = {teachers}
            setTeachers ={setTeachers}
            />
          </Route>

          <Route path="/addteachers">
            <AddTeachers
            teachers = {teachers}
            setTeachers ={setTeachers}
            />
          </Route>

          <Route path="/updateteachers/:id">
            <UpdateTeachers
            teachers = {teachers}
            setTeachers ={setTeachers}
            />
          </Route>
          
          <Route path="**">
              <Nopage/>
          </Route>

       </Switch>
    </div>
  );
}

export default App;
