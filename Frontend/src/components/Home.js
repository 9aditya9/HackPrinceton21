// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import bgim from "../st.jpg";
import About from "./About";
import { Fade } from "react-reveal";
import Form from "./Form";

export default function Home() {
  return (
    <>
      <Container
        disableGutters="true"
        maxWidth="xl"
        sx={{
          minWidth: "100vw",
          padding: "0px",
          margin: "0px",
          // backgroundColor: "red",
          height: "100vh"
        }}
      >
        <Box
          sx={{
            // paddingTop: "10px",
            display: "flex",
            justifyContent: "space-evenly"
          }}
        >
          <div
            style={{
              paddingTop: "10px",
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: "column",
              // backgroundColor: "rgb(0,0,0)",
              // background: "rgba(172, 205, 227, 0.4)",
              // background-color: rgba(172, 205, 227, 0.4);
              width: "100%",
              alignItems: "center",
              textAlign: "center"
            }}
          >
            <Fade bottom>
              <div>
                <h1>Stroke</h1>
                <Fade bottom delay={500}>
                  <p>
                    A stroke occurs when the blood supply to part of your brain
                    is interrupted or reduced, preventing brain tissue from
                    getting oxygen and nutrients. Brain cells begin to die in
                    minutes. A stroke is a medical emergency, and prompt
                    treatment is crucial. Early action can reduce brain damage
                    and other complications.
                  </p>
                </Fade>
              </div>
            </Fade>
            {/* <div>
              <h1>Causes</h1>
            </div> */}
          </div>
          <Box
            className="content"
            sx={{
              // bgcolor: "#cfe8fc",
              // backgroundImage: "url(" + bgim + ")",
              width: "100%"
            }}
          >
            <Fade>
              <Box
                className="content"
                sx={{
                  // bgcolor: "#cfe8fc",
                  backgroundImage: "url(" + bgim + ")",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  height: "85vh",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-around"
                }}
              ></Box>
            </Fade>
          </Box>
        </Box>
        <About />
        <Form />
      </Container>
    </>
  );
}
