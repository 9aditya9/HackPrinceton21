import * as React from "react";
// import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./home.css";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
// Graphics
import BMI from "../BMI-Hindawi.png";
import AG from "../Age-gender-hindawni.png";
import AG from "../Age-gender-hindawni.png";
import { InputLabel, MenuItem, Select, Switch } from "@mui/material";

export default function Form() {
  const [inputs, setInputs] = React.useState({
    age: 0,
    gender: "",
    ever_married: false,
    hypertension: false,
    heart_disease: false,
    bmi: 30,
    avg_glucose_level: 55,
    Residence_type: "",
    smoking_status: "",
    work_type: "",
    stroke: ""
  });
  const handleChange = (event) => {
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;
    console.log(name + value);
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(Object.entries(inputs));
  };
  // const [value, setValue] = React.useState(30);

  return (
    <Container
      className="flex-container"
      sx={{
        // background: "yellow",
        minWidth: "100%",
        padding: "0px",
        margin: "0px",
        // backgroundColor: "red",
        height: "100%",
        display: "flex"
      }}
      disableGutters="true"
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Typography component="h1" variant="h5">
          Do You Know Your Stroke Risk?
        </Typography>
        <Box
          className="content"
          sx={{
            // bgcolor: "#cfe8fc",
            backgroundImage: "url(" + BMI + ")",
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
        <Box
          className="content"
          sx={{
            // bgcolor: "#cfe8fc",
            backgroundImage: "url(" + AG + ")",
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
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
            // backgroundColor: "red"
          }}
        >
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <InputLabel sx={{ fontWeight: "bolder" }} id="gender">
              gender
            </InputLabel>
            <Select
              fullWidth
              labelId="gender"
              id="gender"
              value={inputs.gender}
              name="gender"
              label="gender"
              onChange={handleChange}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
            <TextField
              margin="normal"
              required
              fullWidth
              id="age"
              label="Age"
              name="age"
              onChange={handleChange}
              autoComplete="age"
            />

            <Box sx={{ width: 200 }}>
              <Typography component="h5" variant="h5">
                BMI
              </Typography>
              <Stack
                spacing={2}
                direction="row"
                sx={{ mb: 1 }}
                alignItems="center"
              >
                <Slider
                  aria-label="Volume"
                  // value={value}
                  name="bmi"
                  onChange={handleChange}
                />
              </Stack>
            </Box>
            <Typography component="h5" variant="h5">
              hypertension
            </Typography>

            <Switch
              name="hypertension"
              // checked={inputs.hypertension}
              onChange={(event) =>
                setInputs((values) => ({
                  ...values,
                  hypertension: event.target.checked
                }))
              }
              inputProps={{ "aria-label": "controlled" }}
            />

            <Typography component="h5" variant="h5">
              Ever got married?
            </Typography>

            <Switch
              // name=""
              checked={inputs.ever_married}
              onChange={(event) =>
                setInputs((values) => ({
                  ...values,
                  ever_married: event.target.checked
                }))
              }
              inputProps={{ "aria-label": "controlled" }}
            />

            <Typography component="h5" variant="h5">
              heart_disease
            </Typography>

            <Switch
              name="heart_disease"
              checked={inputs.heart_disease}
              onChange={(event) =>
                setInputs((values) => ({
                  ...values,
                  heart_disease: event.target.checked
                }))
              }
              inputProps={{ "aria-label": "controlled" }}
            />
            <Typography component="h5" variant="h5">
              avg_glucose_level
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              sx={{ mb: 1 }}
              alignItems="center"
            >
              <Slider
                aria-label="Volume"
                value={inputs.avg_glucose_level}
                name="avg_glucose_level"
                onChange={handleChange}
              />
            </Stack>
            <InputLabel sx={{ fontWeight: "bolder" }} id="RT">
              Residence_type
            </InputLabel>
            <Select
              fullWidth
              labelId="RT"
              id="Residence_type"
              value={inputs.Residence_type}
              name="Residence_type"
              label="Residency type"
              onChange={handleChange}
            >
              <MenuItem value="rural">Rural</MenuItem>
              <MenuItem value="urban">Urban</MenuItem>
            </Select>

            <InputLabel sx={{ fontWeight: "bolder" }} id="RT">
              smoking_status
            </InputLabel>
            <Select
              fullWidth
              labelId="RT"
              id="smoking_status"
              value={inputs.smoking_status}
              name="smoking_status"
              label="smoking_status"
              onChange={handleChange}
            >
              <MenuItem value="formerly smoked">formerly smoked</MenuItem>
              <MenuItem value="never smoked">never smoked</MenuItem>
              <MenuItem value="smokes">smokes</MenuItem>
              <MenuItem value="Unknown">Unknown</MenuItem>
            </Select>

            <InputLabel sx={{ fontWeight: "bolder" }} id="RT">
              work_type
            </InputLabel>
            <Select
              fullWidth
              labelId="RT"
              id="work_type"
              value={inputs.work_type}
              name="work_type"
              label="work_type"
              onChange={handleChange}
            >
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Self-employed">Self-employed</MenuItem>
              <MenuItem value="Govt_job">Govt_job</MenuItem>
              <MenuItem value="Children">Children</MenuItem>
              <MenuItem value="Never_worked">Never_worked</MenuItem>
            </Select>

            <TextField
              margin="normal"
              required
              fullWidth
              id="stroke"
              label="stroke"
              name="stroke"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "blue", minWidth: "60vw" }}>
        <h1>Tips</h1>
      </Box>
    </Container>
  );
}
