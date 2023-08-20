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
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Row>
    </>
  );
};
