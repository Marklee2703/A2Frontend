import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";

function LecturerDetail() {

    const {id} = useParams();
    const [lecturer, setLecturer] = useState(null);
    const navigate = useNavigate();

    //初始化data
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/lectures/${id}/`, {
                    headers: {

                    }
                }
            )
            .then((response) => {
                setLecturer(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching lecturer details:", error);
            });
    }, [id]);

    // 删除data
    function handleDelete(){
         axios
            .delete(`http://127.0.0.1:8000/api/lectures/${id}/`, {
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

    if (!lecturer) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>Lecturer Details</h1>
            <p>ID: {lecturer.id}</p>
            <p>Staff_id: {lecturer.staff_id}</p>
            <p>Name: {lecturer.user.first_name + "" + lecturer.user.last_name}</p>
            <p>Date of Birth: {lecturer.date_of_birth}</p>

            <div>
                <Link to={`/lectures/${id}/update`}>Update</Link>

                <button type="submit" style={{marginLeft: "50px"}} onClick={handleDelete}>
                    Delete
                </button>
            </div>


        </div>
    );
}

export default LecturerDetail;
