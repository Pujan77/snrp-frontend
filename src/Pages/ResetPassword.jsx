import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import { Navigate, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ResetPassword = () => {
  const { resetRequestLast, loggedInStatus } = useContext(AuthContext);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const queryParams = new URLSearchParams(window.location.search);
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};

    if (!values.token) {
      errors.token = "Required";
    }
    if (!values.newPassword) {
      errors.newPassword = "Required";
    } else if (
      !/^(?=.*[0-9])(?=.*[a-zA-Z]).{6,16}$/i.test(values.newPassword)
    ) {
      errors.newPassword = "Invalid Password";
    }

    if (!values.passwordConfirm) {
      errors.passwordConfirm = "Required";
    } else if (values.newPassword !== values.passwordConfirm) {
      errors.passwordConfirm = "Passwords do not match";
    }
    return errors;
  };
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    // console.log(values);
    let res = await resetRequestLast(values);
    if (res) {
      resetForm();
      setSubmitting(false);
      if (res.status === 200) {
        navigate("/login");
      } else {
        setSubmittedMessage("something went wrong");
      }
    }
  };
  if (loggedInStatus) {
    return <Navigate to="/user/dashboard" />;
  } else {
    return (
      <div className="white-container">
        <div className="small-container">
          <p className="heading-text">
            <span>Reset</span> Password
          </p>
        </div>
        {submittedMessage && <Alert variant="danger">{submittedMessage}</Alert>}
        <Formik
          initialValues={{
            token: queryParams.get("token"),
            newPassword: "",
            passwordConfirm: "",
          }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ isSubmitting, resetForm }) => (
            <Form className="form_login">
              <Card>
                <Card.Header>Reset Password Request</Card.Header>
                <Card.Body>
                  <div className="form-group mt-3">
                    <div className="row">
                      <div className="col-6">
                        <Field
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          placeholder="Password"
                          className="form-control"
                        />
                        <ErrorMessage
                          className="error_message"
                          name="newPassword"
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
                      Send
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

export default ResetPassword;
