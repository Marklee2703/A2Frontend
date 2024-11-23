import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function CourseAdd(props) {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    //处理变化
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 保存更新
    const handleSave = () => {
        axios
            .post(`http://127.0.0.1:8000/api/courses/`, formData, {
                    headers: {}

                }
            )
            .then((response) => {
                alert("Create successfully");
                navigate(-1);
            })
            .catch((error) => {
                alert("Create failed");
            });
    };

    return (
        <div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSave();
                }}
            >
                <label>
                    Code:
                    <input
                        type="number"
                        name="code"
                        value={formData.code}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    />
                </label>

                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    />
                </label>


                <button type="submit" style={{marginTop: "20px"}}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default CourseAdd;