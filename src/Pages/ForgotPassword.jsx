import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { Alert, Card } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const ForgotPassword = () => {
  const { resetRequestFirst, loggedInStatus } = useContext(AuthContext);
  const [submittedMessage, setSubmittedMessage] = useState(null);
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  };
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    let res = await resetRequestFirst(values);
    if (res) {
      resetForm();
      setSubmitting(false);
      setSubmittedMessage("Check your email for the reset link.");
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
        {submittedMessage && (
          <Alert variant="success">{submittedMessage}</Alert>
        )}
        <Formik
          initialValues={{
            email: "",
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

export default ForgotPassword;
