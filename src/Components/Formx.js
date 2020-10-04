import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PublishIcon from "@material-ui/icons/Publish";

import "./Formx.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "40ch",
      //   left: "30%",
    },
  },
  button: {
    margin: theme.spacing(1),
  },
  button1a: {
    margin: theme.spacing(1),
    position: "relative",
    // left: "100%",
  },
  button2a: {
    margin: theme.spacing(1),
    right: "100%",
  },
}));

const init = {
  fname: "",
  lname: "",
  age: "",
  sex: "",
  email: "",
  email2: "",
  password1: "",
  password2: "",
  agree: false,
  subscribe: false,
};
const erry = {
  error: "hidden",
  msg: "",
};

const Formx = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState(init);
  const [error, setError] = useState(erry);

  const changeHandler = (e) => {
    let vvb = e.target.name;
    let value = e.target.value;
    // console.log(vvb);
    setData({ ...data, [vvb]: value });
  };
  const changeHandler2 = (e) => {
    setData({ ...data, [e.target.name]: !data[e.target.name] });
  };

  const steppy = (y) => {
    if (y === 1) {
      setStep(y);
    }
    if (y === 2) {
      if (!data.fname) {
        return setError({
          ...error,
          msg: "Input your first name",
          error: "visible",
        });
      } else if (!data.lname) {
        return setError({
          ...error,
          msg: "Input your last name",
          error: "visible",
        });
      }
      setError({ ...error, error: "hidden" });
      setStep(y);
    } else if (y === 3) {
      if (
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          data.email
        )
      ) {
        if (data.email !== data.email2) {
          return setError({
            ...error,
            msg: "Email does not Match",
            error: "visible",
          });
        }
      } else {
        return setError({
          ...error,
          msg: "Invalid Email",
          error: "visible",
        });
      }
      if (data.password1.length > 0) {
        if (data.password1 !== data.password2) {
          return setError({
            ...error,
            msg: "Passwords do not Match",
            error: "visible",
          });
        }
      } else {
        return setError({
          ...error,
          msg: "Password required!",
          error: "visible",
        });
      }

      setError({ ...error, error: "hidden" });
      setStep(y);
    } else if (y === 4) {
      if (data.agree === false) {
        return setError({
          ...error,
          msg: "You need to Agree to terms",
          error: "visible",
        });
      }
      setError({ ...error, error: "hidden" });
      setStep(y);
    } else if (y === 5) {
      setStep(5);
    }
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <span style={{ visibility: error.error }} className="babs">
        {" "}
        {error.msg}
      </span>
      {step === 1 && (
        <Container maxWidth="sm">
          <div className="flexy">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                required
                id="fname"
                label="First Name"
                value={data.fname}
                name="fname"
                onChange={changeHandler}
              />
              <br />
              <TextField
                required
                id="lname"
                value={data.lname}
                label="Last Name"
                name="lname"
                onChange={changeHandler}
              />
              <br />
              <div className="glex2">
                <div>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Age
                  </InputLabel>

                  <Select
                    native
                    label="Age"
                    name="age"
                    value={data.age}
                    onChange={changeHandler}
                    inputProps={{
                      name: "age",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"underage"}> {"<18 Years Old"}</option>
                    <option value={"18-34"}>18 - 34</option>
                    <option value={"34-50"}>34 - 50</option>
                    <option value={"34-50"}>{">50 Yeears Old"}</option>
                  </Select>
                </div>
                <div className="glam">
                  <InputLabel htmlFor="outlined-age-native-simple2">
                    Sex
                  </InputLabel>
                  <Select
                    native
                    label="Sex"
                    value={data.sex}
                    name="sex"
                    onChange={changeHandler}
                    inputProps={{
                      name: "sex",
                      id: "outlined-age-native-simple2",
                    }}
                  >
                    <option aria-label="None" value="" />
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </Select>
                </div>
              </div>
              {/* <div className="bty"> */}
              {/* <div classname="bty"> */}
              <Button
                variant="contained"
                color="primary"
                size="large"
                onClick={() => {
                  steppy(2);
                }}
                className={classes.button}
                startIcon={<NavigateNextIcon />}
              >
                Next
              </Button>
              {/* </div> */}

              {/* </div> */}
            </form>
          </div>
        </Container>
      )}
      {/* Second Step */}
      {step === 2 && (
        <Container maxWidth="sm" className="hhh">
          <div className="flexy">
            <form className={classes.root} noValidate autoComplete="off">
              {/* <div className="yobo"> */}
              <TextField
                required
                id="email"
                type="email"
                label="Email"
                value={data.email}
                name="email"
                onChange={changeHandler}
              />
              <br />
              <TextField
                required
                id="cemail"
                value={data.email2}
                name="email2"
                onChange={changeHandler}
                type="email"
                label="Confirm Email"
              />
              <br />
              <TextField
                required
                id="password"
                value={data.password1}
                name="password1"
                onChange={changeHandler}
                type="password"
                label="Password"
              />
              <br />
              <TextField
                required
                id="cpassword"
                value={data.password2}
                name="password2"
                onChange={changeHandler}
                label="Confirm Password"
                type="password"
              />
              <div className="bttn">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    steppy(1);
                  }}
                  className={classes.button2a}
                  startIcon={<ArrowBackIosIcon />}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    steppy(3);
                  }}
                  className={classes.button1a}
                  startIcon={<NavigateNextIcon />}
                >
                  Next
                </Button>
              </div>
            </form>
          </div>
        </Container>
      )}
      {/* Third Step */}
      {step === 3 && (
        <Container maxWidth="sm">
          <div className="flexy">
            <form className={classes.root} noValidate autoComplete="off">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={data.subscribe}
                    name="checkedB"
                    color="primary"
                    value={data.subscribe}
                    name="subscribe"
                    onClick={changeHandler2}
                  />
                }
                label="I Will love to receive promotional emails"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    required
                    checked={data.agree}
                    name="checkedB"
                    color="primary"
                    value={data.agree}
                    name="agree"
                    onClick={changeHandler2}
                  />
                }
                label="I Agree with the terms and conditions"
              />

              {/* <div className="formg"> */}
              <div className="bttn">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    steppy(2);
                  }}
                  className={classes.button2a}
                  startIcon={<ArrowBackIosIcon />}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    steppy(4);
                  }}
                  className={classes.button1a}
                  startIcon={<NavigateNextIcon />}
                >
                  Next
                </Button>
              </div>
              {/* </div> */}
            </form>
          </div>
        </Container>
      )}
      {step === 4 && (
        <Container maxWidth="sm">
          <div className="flexy">
            <form className={classes.root} noValidate autoComplete="off">
              <TextField
                disabled
                value={data.fname}
                id="fname2"
                label="First Name"
              />

              <TextField
                disabled
                value={data.lname}
                id="lname2"
                label="Last Name"
              />

              <TextField disabled value={data.age} id="age2" label="Age" />

              <TextField disabled value={data.sex} id="sex2" label="Sex" />
              <TextField
                disabled
                value={data.email}
                id="email2"
                label="Email"
              />
              <br />
              <div className="bttn">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    steppy(3);
                  }}
                  className={classes.button2a}
                  startIcon={<ArrowBackIosIcon />}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => {
                    steppy(5);
                  }}
                  className={classes.button1a}
                  startIcon={<PublishIcon />}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Container>
      )}
      {step === 5 && <h1> Thanks for Submitting </h1>}
    </React.Fragment>
  );
};

export default Formx;
