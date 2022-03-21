import { Box } from "@mui/material";
import React from "react";
import MediaCard from "../card";
import FlavorsModal from "../modal";
import './kit.css'



export default function Kit() {
  return (
    <Box className="BoxKits">
      <FlavorsModal />
    </Box>
  );
}
