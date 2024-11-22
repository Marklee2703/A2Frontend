import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function SemesterDetail() {

    const {id} = useParams();
    const [semester, setSemester] = useState(null);
    const navigate = useNavigate();

    //初始化data
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/semesters/${id}/`, {
                    headers: {

                    }
                }
            )
            .then((response) => {
                setSemester(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching semester details:", error);
            });
    }, [id]);

    // 删除data
    function handleDelete(){
         axios
            .delete(`http://127.0.0.1:8000/api/semesters/${id}/`, {
                    headers: {

                    }
                }
            )
            .then((response) => {
                alert("delete successfully");
                navigate(-1);

            })
            .catch((error) => {
                alert("delete failed")
            });
    }

    if (!semester) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Semester Details</h1>
            <p>ID: {semester.id}</p>
            <p>Year: {semester.year}</p>
            <p>Semester: {semester.semester}</p>
            <p>Start Date: {semester.start_date}</p>
            <p>End Date: {semester.end_date}</p>

            <div>
                <Link to={`/semesters/${id}/update`}>Update</Link>

                <button type="submit" style={{marginLeft: "50px"}} onClick={handleDelete}>
                    Delete
                </button>
            </div>


        </div>
    );
}

export default SemesterDetail;
