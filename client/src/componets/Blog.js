import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useStyles } from "./utils";

const Blogs = ({ title, desc, img, user, isUser, id }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  
  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };
  
  const handleDelete = async () => {
    try {
      await axios.delete(`http://127.0.0.1:5000/api/blogs/${id}`);
      navigate("/myBlogs");
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <Card
        sx={{
          width: "40%",
          margin: "auto",
          mt: 2,
          padding: 2,
          boxShadow: "5px 5px 10px #ccc",
          ":hover": {
            boxShadow: "10px 10px 20px #ccc",
          },
        }}
      >
        {isUser && (
          <Box display="flex">
            <IconButton onClick={handleEdit} sx={{ marginLeft: "auto" }}>
              <ModeEditOutlineIcon color="orange" />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteForeverIcon color="blue" size={40} />
            </IconButton>
          </Box>
        )}
        <CardHeader
          avatar={
            <Avatar
               className={classes.font}
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              {user ? user.charAt(0) : ""}
            </Avatar>
          }
          title={title}
        />
        <CardMedia
          component="img"
          height="194"
          image={img}
          alt="Paella dish"
        />

        <CardContent>
          <hr />
          <br />
          <Typography
            className={classes.font}
            variant="body2"
            color="text.secondary"
          >
            <b>{user}</b> {": "} {desc}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Blogs;

