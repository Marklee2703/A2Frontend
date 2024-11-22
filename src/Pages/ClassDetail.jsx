import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function ClassDetail() {

    const {id} = useParams();
    const [cla, setCla] = useState(null);
    const navigate = useNavigate();

    //初始化data
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/classes/${id}/`, {
                    headers: {

                    }
                }
            )
            .then((response) => {
                setCla(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching class details:", error);
            });
    }, [id]);

    // 删除data
    function handleDelete(){
         axios
            .delete(`http://127.0.0.1:8000/api/classes/${id}/`, {
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

    if (!cla) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Semester Details</h1>
            <p>ID: {cla.id}</p>
            <p>Number: {cla.number}</p>
            <p>Semester: {cla.semester.year + "   " + cla.semester.semester}</p>
            <p>Course: {cla.course.name}</p>
            <p>Lecture: {cla.lecture.staff_id}</p>
            <p>Students:</p>
            <ul>
                {
                    cla.students.length >0 &&
                    cla.students.map((student, index) => (
                    <li key={index}>
                        {student.student_id + "  " + student.user.first_name + ''+ student.user.last_name}
                    </li>
                ))}
            </ul>


            <div>
                <Link to={`/classes/${id}/update`}>Update</Link>

                <button type="submit" style={{marginLeft: "50px"}} onClick={handleDelete}>
                    Delete
                </button>
            </div>


        </div>
    );
}

export default ClassDetail;
