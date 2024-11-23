import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Course() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/courses/")
            .then((response) => {
                setCourses(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
            });
    }, []);

    return (
        <div>
            <Link to={`/courses/add`} style={{color: 'red'}}>Create new data</Link>

            {courses.length > 0 ? (
                courses.map((s) => (
                    <div key={s.id}>
                        <p>ID: {s.id}</p>
                        <Link to={`/courses/${s.id}`}>View Detail</Link>
                        <p>Code: {s.code}</p>
                        <p>Name: {s.name}</p>
                        <p>--------------------------</p>

                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}

        </div>
    );
}

export default Course;
