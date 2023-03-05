import React, { useContext } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";
import { signupContentWebhook } from "../utils";
import AuthContext from "../context/AuthContext";

const Signup = () => {
  const { signupUser, loggedInStatus } = useContext(AuthContext);
  let navigate = useNavigate();
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);
    let res = await signupUser(values);
    if (res) {
      axios
        .post(`${process.env.REACT_APP_DISCORD_SIGNUP}`, {
          content: `Hello staffs, ${values.firstName} ${values.lastName}, with email:${values.email} has signed up to the system.`,
          username: "Welcome Botey",
          avatar_url:
            "https://i.pinimg.com/originals/b6/97/2d/b6972d320611abaeb4e15c041667c939.jpg",
          attachments: [],
        })
        .then((response) => {
          navigate("/login", {
            state: {
              email: values.email,
            },
          });
          resetForm();
          setSubmitting(false);
        })
        .catch((error) => {
          console.log(error);
          setSubmitting(false);
        });
    }
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = "Required";
    } else if (
      !/^(?=.*[a-zA-Z].*[a-zA-Z])[^0-9]{2,16}$/i.test(values.firstName)
    ) {
      errors.firstName = "Invalid Name";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    } else if (
      !/^(?=.*[a-zA-Z].*[a-zA-Z])[^0-9]{2,16}$/i.test(values.lastName)
    ) {
      errors.lastName = "Invalid Name";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (!/^(?=.*[0-9])(?=.*[a-zA-Z]).{6,16}$/i.test(values.password)) {
      errors.password = "Invalid Password";
    }

    if (!values.passwordConfirm) {
      errors.passwordConfirm = "Required";
    } else if (values.password !== values.passwordConfirm) {
      errors.passwordConfirm = "Passwords do not match";
    }

    return errors;
  };
  if (loggedInStatus) {
    return <Navigate to="/user/dashboard" />;
  } else {
    return (
      <div className="white-container">
        <div className="small-container">
          <p className="heading-text">
            <span>Signup</span> To Explore More
          </p>
          <p className="text">
            Join a massive english <span>Grand Theft Auto V</span> roleplaying
            community. Our voice chat based server will provide you the best
            playing experience! With over <span>200</span> players you will
            never feel alone in the sunny city of Los Santos! Join a gang or law
            enforcement faction, work as a fisherman, or pursue a professional
            poker playing career. The opportunities are endless!{" "}
            <span>The best GTA V RP server</span>
            is waiting for you! Download & Play now!
          </p>
        </div>
        <div>
          Please make sure you use the same email you used on discord to avoid
          conflicts
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            passwordConfirm: "",
          }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ isSubmitting, resetForm }) => (
            <Form className="form_login">
              <Card>
                <Card.Header>Signup</Card.Header>
                <Card.Body>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-6">
                        <Field
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          className="form-control"
                        />
                        <ErrorMessage
                          className="error_message"
                          name="firstName"
                          component="div"
                        />
                      </div>
                      <div className="col-6">
                        <Field
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          className="form-control"
                        />
                        <ErrorMessage
                          className="error_message"
                          name="lastName"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <Field
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                    />
                    <ErrorMessage
                      className="error_message"
                      name="email"
                      component="div"
                    />
                  </div>

                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-6">
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          className="form-control"
                        />
                        <ErrorMessage
                          className="error_message"
                          name="password"
                          component="div"
                        />
                      </div>
                      <div className="col-6">
                        <Field
                          type="password"
                          id="passwordConfirm"
                          name="passwordConfirm"
                          placeholder="Confirm Passowrd"
                          className="form-control"
                        />
                        <ErrorMessage
                          className="error_message"
                          name="passwordConfirm"
                          component="div"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="note_text">
                    ** Password must have at least one number and one character
                    (6-16 chars) **
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="button-wrapper">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      disabled={isSubmitting}
                    >
                      Sign Up
                    </button>
                  </div>
                </Card.Footer>
              </Card>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
};

export default Signup;
