import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Student() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/students/")
            .then((response) => {
                setStudents(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching semesters:", error);
            });
    }, []);

    return (
        <div>

            {students.length > 0 ? (
                students.map((s) => (
                    <div key={s.id}>
                        <p>ID: {s.id}</p>
                        <Link to={`/students/${s.id}`}>View Detail</Link>
                        <p>Staff_id: {s.student_id}</p>
                        <p>Name: {s.user.first_name+ "" + s.user.last_name}</p>
                        <p>Date of Birth: {s.date_of_birth}</p>

                        <p>--------------------------</p>

                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}

        </div>
    );
}

export default Student;
