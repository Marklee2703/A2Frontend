import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function CourseUpdate(props) {

    const {id} = useParams();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    // 初始化formData
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/courses/${id}/`, {
                    headers: {}

                }
            )
            .then((response) => {
                setFormData(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching courses details:", error);
            });
    }, [id]);

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
            .patch(`http://127.0.0.1:8000/api/courses/${id}/`, formData, {
                    headers: {}

                }
            )
            .then((response) => {
                alert("Update successfully");
                navigate(-1);
            })
            .catch((error) => {
                alert("Update failed");
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

export default CourseUpdate;