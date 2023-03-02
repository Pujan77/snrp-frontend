import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { loginUser, loggedInStatus } = useContext(AuthContext);
  let location = useLocation();
  const navigate = useNavigate();
  const validate = (values) => {
    const errors = {};

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

    return errors;
  };
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    let res = await loginUser(values);
    if (res) {
      resetForm();
      setSubmitting(false);
      navigate("/user/dashboard");
    }
  };
  if (loggedInStatus) {
    return <Navigate to="/user/dashboard" />;
  } else {
    return (
      <div className="white-container">
        <div className="small-container">
          <p className="heading-text">
            <span>LOGIN</span> TO BEGIN
          </p>
        </div>
        <Formik
          initialValues={{
            email: location?.state?.email ? location?.state?.email : "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validate={validate}
        >
          {({ isSubmitting, resetForm }) => (
            <Form className="form_login">
              <Card>
                <Card.Header>Login</Card.Header>
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

                  <div className="form-group mt-3">
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
                </Card.Body>
                <Card.Footer>
                  <div className="button-wrapper">
                    <button
                      type="submit"
                      className="btn btn-outline-primary"
                      disabled={isSubmitting}
                    >
                      Login
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

export default Login;
