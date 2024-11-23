import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Semester from "./Pages/Semester";
import SemesterDetail from "./Pages/SemesterDetail";
import SemesterUpdate from "./Pages/SemesterUpdate";
import SemesterAdd from "./Pages/SemesterAdd";
import Class from "./Pages/Class";
import ClassDetail from "./Pages/ClassDetail";
import ClassUpdate from "./Pages/ClassUpdate";
import ClassAdd from "./Pages/ClassAdd";
import Course from "./Pages/Course";
import CourseAdd from "./Pages/CourseAdd";
import CourseUpdate from "./Pages/CourseUpdate";
import CourseDetail from "./Pages/CourseDetail";
import Lecturer from "./Pages/Lecturer";
import LecturerUpdate from "./Pages/LecturerUpdate";
import LecturerDetail from "./Pages/LecturerDetail";
import Student from "./Pages/Student";
import StudentUpdate from "./Pages/StudentUpdate";
import StudentDetail from "./Pages/StudentDetail";


function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <Routes>

        <Route path="/" element={<Home/>}/>
          <Route path="/semesters" element={<Semester/>}/>
          <Route path="/semesters/add" element={<SemesterAdd/>}/>
          <Route path="/semesters/:id" element={<SemesterDetail />} />
           <Route path="/semesters/:id/update" element={<SemesterUpdate />} />
           <Route path="/classes" element={<Class/>}/>
           <Route path="/classes/add" element={<ClassAdd/>}/>
            <Route path="/classes/:id" element={<ClassDetail />} />
           <Route path="/classes/:id/update" element={<ClassUpdate />} />
           <Route path="/courses" element={<Course/>}/>
           <Route path="/courses/add" element={<CourseAdd/>}/>
          <Route path="/courses/:id" element={<CourseDetail />} />
           <Route path="/courses/:id/update" element={<CourseUpdate />} />
           <Route path="/lectures" element={<Lecturer/>}/>
          <Route path="/lectures/:id" element={<LecturerDetail />} />
           <Route path="/lectures/:id/update" element={<LecturerUpdate />} />
            <Route path="/students" element={<Student/>}/>
          <Route path="/students/:id" element={<StudentDetail />} />
           <Route path="/students/:id/update" element={<StudentUpdate />} />



      </Routes>


    </div>
  );
}

export default App;
