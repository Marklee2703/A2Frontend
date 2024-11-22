import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {BASE_URL} from "../constants";

function Class() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        axios
            .get(BASE_URL+ "api/classes/")
            .then((response) => {
                setClasses(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching classes:", error);
            });
    }, []);

    return (
        <div>
            <Link to={`/classes/add`} style={{color: 'red'}}>Create new data</Link>

            {classes.length > 0 ? (
                classes.map((s) => (
                    <div key={s.id}>
                        <p>Number: {s.number}</p>
                        <Link to={`/classes/${s.id}`}>View Detail id {s.id}</Link>
                        <p>Course: {s.course.name }</p>
                        <p>Lecturer: {s.lecturer}</p>
                        <p>Semester: {s.semester.id}</p>
                        <p>Students: {s.stduents}</p>
                        <p>--------------------------</p>

                    </div>
                ))
            ) : (
                <p>No data available</p>
            )}

        </div>
    );
}

export default Class;
