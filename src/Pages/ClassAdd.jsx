import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ClassAdd() {
    const [formData, setFormData] = useState({
        number: 0,
        semester_id: 0,
        course_id: 0,
        // lecture_id: "",
        // student_ids: [],
    });

    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [semesters, setSemesters] = useState([]);
    const [lectures, setLectures] = useState([]);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        // Fetch data for dropdowns
        axios.get("http://127.0.0.1:8000/api/courses/").then((response) => setCourses(response.data.data));
        axios.get("http://127.0.0.1:8000/api/semesters/").then((response) => setSemesters(response.data.data));
        axios.get("http://127.0.0.1:8000/api/lectures/").then((response) => setLectures(response.data.data));
        axios.get("http://127.0.0.1:8000/api/students/").then((response) => setStudents(response.data.data));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = () => {
        // Validation
        // if (!formData.number || !formData.semester_id || !formData.course_id) {
        //     alert("Number, semester, and course are required!");
        //     return;
        // }

        // Prepare data for submission
        const payload = {
            number: parseInt(formData.number),
            semester_id: parseInt(formData.semester_id),
            course_id: parseInt(formData.course_id),
            // lecture: formData.lecture_id ? parseInt(formData.lecture_id) : null,
            // students: formData.student_ids.map((id) => parseInt(id)), // Convert to array of integers
        };

        axios
            .post("http://127.0.0.1:8000/api/classes/", payload)
            .then(() => {
                alert("Class created successfully!");
                navigate(-1);
            })
            .catch((error) => {
                console.error("Create failed:", error.response?.data);
                alert(`Create failed: ${JSON.stringify(error.response?.data)}`);
            });
    };

    const handleStudentSelection = (e) => {
        const { options } = e.target;
        const selectedIds = [];
        for (const option of options) {
            if (option.selected) {
                selectedIds.push(option.value);
            }
        }
        setFormData((prev) => ({
            ...prev,
            student_ids: selectedIds,
        }));
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
                    Number:
                    <input
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        style={{ margin: "10px 0", width: "100%" }}
                        required
                    />
                </label>

                <label>
                    Course:
                    <select
                        name="course_id"
                        value={formData.course_id}
                        onChange={handleChange}
                        style={{ margin: "10px 0", width: "100%" }}
                        required
                    >
                        <option value="">Select a course</option>
                        {courses.map((course) => (
                            <option key={course.id} value={course.id}>
                                {course.name}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Semester:
                    <select
                        name="semester_id"
                        value={formData.semester_id}
                        onChange={handleChange}
                        style={{ margin: "10px 0", width: "100%" }}
                        required
                    >
                        <option value="">Select a semester</option>
                        {semesters.map((semester) => (
                            <option key={semester.id} value={semester.id}>
                                {semester.year} - Semester {semester.semester}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Lecture:
                    <select
                        name="lecture_id"
                        value={formData.lecture_id}
                        onChange={handleChange}
                        style={{ margin: "10px 0", width: "100%" }}
                    >
                        <option value="">Select a lecture</option>
                        {lectures.map((lecture) => (
                            <option key={lecture.id} value={lecture.id}>
                                {lecture.staff_id}
                            </option>
                        ))}
                    </select>
                </label>

                <label>
                    Students:
                    <select
                        name="students"
                        multiple
                        value={formData.student_ids}
                        onChange={handleStudentSelection}
                        style={{ margin: "10px 0", width: "100%" }}
                    >
                        {students.map((student) => (
                            <option key={student.id} value={student.id}>
                                {student.user.username}
                            </option>
                        ))}
                    </select>
                </label>

                <button type="submit" style={{ marginTop: "20px" }}>
                    Save
                </button>
            </form>
        </div>
    );
}

export default ClassAdd;
