import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function SemesterAdd(props) {

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
            .post(`http://127.0.0.1:8000/api/semesters/`, formData, {
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
                    Year:
                    <input
                        type="number"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    />
                </label>

                <label>
                    Semester:
                    <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    >
                        <option></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </label>

                <label>
                    Start Date:
                    <input
                        type="date"
                        name="start_date"
                        value={formData.start_date}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    />
                </label>

                <label>
                    End Date:
                    <input
                        type="date"
                        name="end_date"
                        value={formData.end_date}
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

export default SemesterAdd;