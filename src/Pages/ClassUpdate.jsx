import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

function ClassUpdate(props) {

    const {id} = useParams();
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [lectures, setLectures] = useState([]);
    const [students, setStudents] = useState([]);

    // 初始化formData
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/classes/${id}/`, {
                    headers: {}

                }
            )
            .then((response) => {
                setFormData(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching class details:", error);
            });
    }, [id]);

    // 初始化选项
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/courses/`, {
                    headers: {}

                }
            )
            .then((response) => {
                setCourses(response.data.data)
            })
            .catch((error) => {
                console.error("Error fetching class details:", error);
            });
        axios
            .get(`http://127.0.0.1:8000/api/semesters/`, {
                    headers: {}

                }
            )
            .then((response) => {
                setSemesters(response.data.data);
            })
            .catch((error) => {
                console.error("Error fetching semesters details:", error);
            });
        axios
            .get(`http://127.0.0.1:8000/api/lectures/`, {
                    headers: {}

                }
            )
            .then((response) => {
                setLectures(response.data.data)
            })
            .catch((error) => {
                console.error("Error fetching lecture details:", error);
            });
    }, []);


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
            .patch(`http://127.0.0.1:8000/api/classes/${id}/`, formData, {
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
                    Year:
                    <input
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    />
                </label>

                <label>
                    Courses:
                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    >
                        {
                            courses.map((course, index) => (
                                <option key={index} value={course.id}>{course.name}</option>
                            ))
                        }

                    </select>
                </label>

                <label>
                    Lectures:
                    <select
                        name="lecture"
                        value={formData.lecture}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    >
                        {
                            lectures.map((lecture, index) => (
                                <option key={index} value={lecture.id}>{lecture.staff_id}</option>
                            ))
                        }

                    </select>
                </label>

                <label>
                    Semester:
                    <select
                        name="semester"
                        value={formData.semester}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    >
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </label>

                <label>
                    Students:
                    <select
                        name="students"
                        value={formData.students}
                        onChange={handleChange}
                        style={{margin: "10px 0", width: "100%"}}
                    >
                        {
                            students.map((student, index) => (
                                <option key={index} value={student.id}>{student.student_id}</option>
                            ))
                        }

                    </select>
                </label>

                <button type="submit" style={{marginTop: "20px"}}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default ClassUpdate;