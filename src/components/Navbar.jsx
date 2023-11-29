import React, { Fragment } from "react";
import { logo } from "../utils/constants";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function Navbar() {
  return (
    <Fragment>
      <Stack
        direction="row"
        alignContent="center"
        p={2}
        sx={{
          position: "sticky",
          background: "#000",
          top: 0,
          justifyContent: "space-between",
        }}
      >
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="logo" height={45} />
        </Link>
        <SearchBar />
      </Stack>
      ;
    </Fragment>
  );
}

export default Navbar;
