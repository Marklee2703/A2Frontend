import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function StudentUpdate(props) {

    const {id} = useParams();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
    axios
        .get(`http://127.0.0.1:8000/api/students/${id}/`, {
            headers: {}
        })
        .then((response) => {
            if (response.data.success) {
                // 提取 data 中的字段
                const { student_id, date_of_birth } = response.data.data;
                setFormData({ student_id, date_of_birth }); // 只设置需要的字段
            } else {
                console.error("Error: API response not successful");
            }
        })
        .catch((error) => {
            console.error("Error fetching student details:", error);
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
            .patch(`http://127.0.0.1:8000/api/students/${id}/`, formData, {
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
                    Student ID:

                    <input
                        type="number"
                        name="student_id"
                        value={formData.student_id || ''} // 默认值为空字符串，防止未定义
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    />

                </label>


                <label>
                    Birthday:
                    <input
                        type="date"
                        name="date_of_birth"
                        value={formData.date_of_birth || ''} // 确保字段值不为空
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

export default StudentUpdate;