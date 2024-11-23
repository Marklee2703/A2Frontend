import React from 'react';
import {Link} from "react-router-dom";

function Home(props) {
    return (
        <div>
            <p>
     <Link to={`/classes/`}>Class</Link>
            </p>
            <p>
  <Link to={`/semesters/`}>Semesters</Link>
            </p>
            <p>
 <Link to={`/courses/`}>Courses</Link>
            </p>
            <p>
  <Link to={`/students/`}>Students</Link>
            </p>
            <p>
   <Link to={`/lectures/`}>Lectures</Link>
            </p>







        </div>
    );
}

export default Home;