import { Container } from "@mui/material";
import BlogListHeader from "../components/Header";
import { Row } from "reactstrap";

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

export const BlogList = ({}) => {
  const [blogs, setBlogs] = React.useState([]);
  const [searchTitle, setSearchTitle] = React.useState("");
  const fetchBlogs = async (title, page) => {
    const response = await axios.get(
      `https://root-blog.prismic.io/api/v2/documents/search?ref=ZGS6jxEAACUAsSPz&q=%5B%5Bfulltext(my.post.title%2C+%22${title}%22)%5D%5D&q=%5B%5Bat(document.type%2C+%22post%22)%5D%5D&page=${page}&pageSize=10`
    );
    setBlogs(response.data)
  };
  return (
    <>
      <Container fixed sx={{ display: "flex", flexWrap: "wrap" }}>
        <BlogListHeader />
      </Container>
      <Row className="d-flex justify-content-center m-5">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search blogs here"
            inputProps={{ "aria-label": "search Blog" }}
            onChange={(e) => setSearchTitle(e.target.value)}
            value={searchTitle}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={() => fetchBlogs(searchTitle, 1)}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </Row>
    </>
  );
};
