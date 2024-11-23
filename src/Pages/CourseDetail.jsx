import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function CourseDetail() {

    const {id} = useParams();
    const [course, setCourse] = useState(null);
    const navigate = useNavigate();

    //初始化data
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/courses/${id}/`, {
                    headers: {

                    }
                }
            )
            .then((response) => {
                setCourse(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching semester details:", error);
            });
    }, [id]);

    // 删除data
    function handleDelete(){
         axios
            .delete(`http://127.0.0.1:8000/api/courses/${id}/`, {
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

    if (!course) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Course Details</h1>
            <p>ID: {course.id}</p>
            <p>Code: {course.code}</p>
            <p>Name: {course.name}</p>


            <div>
                <Link to={`/courses/${id}/update`}>Update</Link>

                <button type="submit" style={{marginLeft: "50px"}} onClick={handleDelete}>
                    Delete
                </button>
            </div>


        </div>
    );
}

export default CourseDetail;
