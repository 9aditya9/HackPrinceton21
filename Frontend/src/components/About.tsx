import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import bgim from "../st.jpg";
import ST from "../stroke.jpeg";
// import { Fade } from "react-reveal";

export default function About() {
    return (
        <>
            <Container
                disableGutters={true}
                maxWidth="xl"
                sx={{
                    minWidth: "100%",
                    padding: "0px",
                    margin: "0px",
                    // backgroundColor: "red",
                    // height: "100vh",
                    maxHeight: "auto",
                    overflow: "auto",
                    paddingBottom: "20px"
                }}
            >
                <div
                    style={{
                        paddingTop: "10px",
                        // backgroundColor: "blue",
                        textAlign: "center"
                    }}
                >
                    <h1>Causes of Stroke!</h1>
                </div>
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center"
                        // paddingTop: "10px",
                    }}
                >
                    <div
                        style={{
                            paddingTop: "10px",
                            alignItems: "center"
                        }}
                    >
                        {/* <Fade bottom> */}
                        <div>
                            {/* <h1>Stroke</h1> */}
                            <h3>
                                A stroke occurs when the blood supply to part of your brain is
                                interrupted or reduced, preventing brain tissue from getting
                                oxygen and nutrients. Brain cells begin to die in minutes. A
                                stroke is a medical emergency, and prompt treatment is
                                crucial. Early action can reduce brain damage and other
                                complications.
                            </h3>
                            <Box
                                className="content"
                                sx={{
                                    // bgcolor: "#cfe8fc",
                                    backgroundImage: "url(" + ST + ")",
                                    backgroundRepeat: "no-repeat",
                                    width: "70%",
                                    backgroundPosition: "center",
                                    backgroundSize: "cover",
                                    height: "85vh",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-around"
                                }}
                            ></Box>
                            <p>
                                What are Warning Signs of a Stroke? Warning signs are clues
                                your body sends that your brain is not receiving enough
                                oxygen. If you observe one or more of these signs of a stroke
                                or "brain attack," don't wait, call a doctor or 911 right
                                away! Sudden numbness or weakness of face, arm, or leg,
                                especially on one side of the body Sudden confusion, or
                                trouble talking or understanding speech Sudden trouble seeing
                                in one or both eyes Sudden trouble walking, dizziness, or loss
                                of balance or coordination Sudden severe headache with no
                                known cause Other danger signs that may occur include double
                                vision, drowsiness, and nausea or vomiting. Sometimes the
                                warning signs may last only a few moments and then disappear.
                                These brief episodes, known as transient ischemic attacks or
                                TIAs, are sometimes called "mini-strokes." Although brief,
                                they identify an underlying serious condition that isn't going
                                away without medical help. Unfortunately, since they clear up,
                                many people ignore them. Don't. Paying attention to them can
                                save your life.
                            </p>
                        </div>
                        {/* </Fade> */}
                    </div>
                </Box>
            </Container>
        </>
    );
}
