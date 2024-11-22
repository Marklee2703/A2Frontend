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

      </Routes>


    </div>
  );
}

export default App;
