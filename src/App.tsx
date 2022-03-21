import { Container, CssBaseline } from "@mui/material"
import React from "react"
import Kit from "./components/kit/kit"
import Navbar from "./components/navbar/navbar"

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Navbar />
        <Kit />
      </Container>
    </React.Fragment>
  )
}

export default App
