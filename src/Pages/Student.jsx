import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

function Semester() {
    const [semesters, setSemesters] = useState([]);

    useEffect(() => {
        axios
            .get("http://127.0.0.1:8000/api/semesters/")
            .then((response) => {
                setSemesters(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching semesters:", error);
            });
    }, []);

    return (
        <div>
            <Link to={`/semesters/add`} style={{color: 'red'}}>Create new data</Link>

            {semesters.length > 0 ? (
                semesters.map((s) => (
                    <div key={s.id}>
                        <p>ID: {s.id}</p>
                        <Link to={`/semesters/${s.id}`}>View Detail</Link>
                        <p>Year: {s.year}</p>
                        <p>Semester: {s.semester}</p>
                        <p>Start Date: {s.start_date}</p>
                        <p>End Date: {s.end_date}</p>
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
