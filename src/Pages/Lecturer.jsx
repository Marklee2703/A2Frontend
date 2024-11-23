import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Semester() {
    const [lectures, setLectures] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/lectures/")
            .then((response) => {
                setLectures(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching semesters:", error);
            });
    }, []);

    return (
        <div>

            {lectures.length > 0 ? (
                lectures.map((s) => (
                    <div key={s.id}>
                        <p>ID: {s.id}</p>
                        <Link to={`/lectures/${s.id}`}>View Detail</Link>
                        <p>Staff_id: {s.staff_id}</p>
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

export default Semester;
