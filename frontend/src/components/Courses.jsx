import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../config.js";
import axios from "axios";

function Courses() {
  const [courses, setCourses] = useState([]);

  const init = async () => {
    const response = await axios.get(`${BASE_URL}/admin/courses/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    setCourses(response.data.courses);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course) => {
        return <Course course={course} key={course._id} />;
      })}
    </div>
  );
}

export function Course({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20,
        display: "flex",
        flex: "flexWrap",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography textAlign={"center"} variant="h5">
          {course.title}
        </Typography>
        <Typography textAlign={"center"} variant="subtitle1">
          {course.description}
        </Typography>
        <img src={course.imageLink} style={{ width: 300 }} alt={course.title} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/course/" + course._id);
          }}
        >
          Edit
        </Button>
        <Button
          variant="contained"
          size="large"
          onClick={async () => {
            const response = await axios.delete(
              `${BASE_URL}/admin/courses/` + course._id,
              {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              }
            );
            window.location = "/courses";
            // console.log(response.data);
          }}
        >
          Delete
        </Button>
      </div>
    </Card>
  );
}

export default Courses;
