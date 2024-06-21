import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Card } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../config.js";
function AddCourse() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "80vh",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          varint={"outlined"}
          style={{ width: 400, padding: 20, marginTop: 30, height: "100%" }}
        >
          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            fullWidth={true}
            label="Title"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
            fullWidth={true}
            label="Description"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setImage(e.target.value);
            }}
            value={image}
            fullWidth={true}
            label="Image link"
            variant="outlined"
          />

          <TextField
            style={{ marginBottom: 10 }}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            value={price}
            fullWidth={true}
            label="Price"
            variant="outlined"
          />

          <Button
            size={"large"}
            variant="contained"
            onClick={async () => {
              await axios.post(
                `${BASE_URL}/admin/courses`,
                {
                  title: title,
                  description: description,
                  imageLink: image,
                  published: true,
                  price,
                },
                {
                  headers: {
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );

              setDescription("");
              setImage("");
              setPrice("");
              setTitle("");
              // alert("Added course!");
            }}
          >
            {" "}
            Add course
          </Button>
        </Card>
      </div>
    </div>
  );
}

export default AddCourse;
