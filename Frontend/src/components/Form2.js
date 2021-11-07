import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import bgim from "../st.jpg";
import { Fade } from "react-reveal";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  TextField
} from "@mui/material";
import { useState } from "react";
// ctuuniversity networking video
export default function Form() {
  // const [data, setData] = useState({});
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };
  return (
    <>
      <Container
        // disableGutters="true"
        // maxWidth="xl"
        sx={{
          // minWidth: "100vw",
          // padding: "0px",
          // margin: "0px",
          backgroundColor: "red",
          height: "100%",
          alignItems: "center"
          // textAlign: "center"
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column"
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1, backgroundColor: "yellow" }}
          >
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              onChange={handleChange}
            />
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              onChange={handleChange}
            />
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              onChange={handleChange}
            />
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              onChange={handleChange}
            />
            <TextField
              helperText="Please enter your name"
              id="demo-helper-text-aligned"
              label="Name"
              onChange={handleChange}
            />
            <Button type="submit">submit</Button>
          </Box>
        </Box>
      </Container>
    </>
  );
}
