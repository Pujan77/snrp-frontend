import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { validationSchemaWhitelist } from "../utils";

const WhitelistForm = ({ handleSubmit }) => {
  return (
    <div className="container whitelist_container">
      <div className="form_wrapper">
        <Formik
          initialValues={{
            steamName: "",
            discordId: "",
            steamHex: "",
            discordIdentifier: "",
            ageIrl: "",
            nameIrl: "",
            charName: "",
            charBackstory: "",
            roleplayClip: "",
            steamHours: "",
            question1: "",
            question2: "",
            question3: "",
            question4: "",
            question5: "",
            question6: "",
            question7: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchemaWhitelist}
        >
          {({ resetForm, isSubmitting }) => (
            <Form>
              <div className="mt-3">Basics:</div>
              <hr />
              <div className="form-group mt-3 text-start">
                <div className="row">
                  <div className="col-6">
                    <label>Steam name</label>
                    <Field
                      type="text"
                      id="steamName"
                      name="steamName"
                      placeholder="Eg. pirates12"
                      className="form-control"
                    />
                    <ErrorMessage
                      className="error_message"
                      name="steamName"
                      component="div"
                    />
                  </div>
                  <div className="col-6">
                    <label>Steam Hex</label>
                    <Field
                      type="text"
                      id="steamHex"
                      name="steamHex"
                      placeholder="Eg. 11001c0112b12f"
                      className="form-control"
                    />
                    <ErrorMessage
                      className="error_message"
                      name="steamHex"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3 text-start">
                <div className="row">
                  <div className="col-6">
                    <label>Discord Username</label>
                    <Field
                      type="text"
                      id="discordId"
                      name="discordId"
                      placeholder="(Eg. jackson#0444)"
                      className="form-control"
                    />
                    <ErrorMessage
                      className="error_message"
                      name="discordId"
                      component="div"
                    />
                  </div>
                  <div className="col-6">
                    <label>Discord ID</label>
                    <Field
                      type="text"
                      id="discordIdentifier"
                      name="discordIdentifier"
                      placeholder="right click profile and copy"
                      className="form-control"
                    />
                    <ErrorMessage
                      className="error_message"
                      name="discordIdentifier"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3 text-start">
                <div className="row">
                  <div className="col-6">
                    <label>Age Irl</label>
                    <Field
                      type="number"
                      id="ageIrl"
                      name="ageIrl"
                      placeholder="(Eg. 21)"
                      className="form-control"
                    />
                    <ErrorMessage
                      className="error_message"
                      name="ageIrl"
                      component="div"
                    />
                  </div>
                  <div className="col-6">
                    <label>IRL Name</label>
                    <Field
                      type="text"
                      id="nameIrl"
                      name="nameIrl"
                      placeholder="(Eg. Johnie Smith)"
                      className="form-control"
                    />
                    <ErrorMessage
                      className="error_message"
                      name="nameIrl"
                      component="div"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mt-3 text-start">
                <label>Character Name</label>
                <Field
                  type="text"
                  id="charName"
                  name="charName"
                  placeholder="(Eg. Charlie Joy)"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="charName"
                  component="div"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>Character Backstory </label>

                <Field
                  as="textarea"
                  rows={4}
                  id="charBackstory"
                  name="charBackstory"
                  placeholder="(Min 20 words)"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="charBackstory"
                  component="div"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>Any remarkable roleplay clip?</label>

                <Field
                  type="text"
                  id="roleplayClip"
                  name="roleplayClip"
                  placeholder="Youtube/Twitch and/or other urls "
                  className="form-control"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>
                  Roleplay Hours (GOTO steam, library, all apps, source SDK base
                  2007 and see hours)
                </label>
                <Field
                  type="number"
                  id="steamHours"
                  name="steamHours"
                  placeholder="Eg. 540"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="steamHours"
                  component="div"
                />
                <div className="note_text">
                  ** If you cannot find, just enter 100, you will be guided to
                  see this in interview**
                </div>
              </div>
              <hr />
              <div>Roleplay Specifics:</div>
              <hr />
              <div className="form-group mt-3 text-start">
                <label>What does roleplay mean to you?</label>
                <Field
                  as="textarea"
                  id="question1"
                  rows={3}
                  name="question1"
                  placeholder="Your answer here"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="question1"
                  component="div"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>
                  Explain your best roleplay story experience so far
                </label>
                <Field
                  as="textarea"
                  id="question2"
                  rows={3}
                  name="question2"
                  placeholder="Your answer here"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="question2"
                  component="div"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>Give an example of No Value of Life</label>
                <Field
                  as="textarea"
                  id="question3"
                  rows={3}
                  name="question3"
                  placeholder="Your answer here"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="question3"
                  component="div"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>What is combat logging?</label>
                <Field
                  as="textarea"
                  id="question4"
                  rows={3}
                  name="question4"
                  placeholder="Your answer here"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="question4"
                  component="div"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>What is combat storing?</label>
                <Field
                  as="textarea"
                  id="question5"
                  rows={3}
                  name="question5"
                  placeholder="Your answer here"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="question5"
                  component="div"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>Explain example of in-game meta</label>
                <Field
                  as="textarea"
                  id="question6"
                  rows={3}
                  name="question6"
                  placeholder="Your answer here"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="question6"
                  component="div"
                />
              </div>
              <div className="form-group mt-3 text-start">
                <label>
                  What is the first thing you do upon entering server? Explain
                </label>
                <Field
                  as="textarea"
                  id="question7"
                  rows={3}
                  name="question7"
                  placeholder="Your answer here"
                  className="form-control"
                />
                <ErrorMessage
                  className="error_message"
                  name="question7"
                  component="div"
                />
              </div>
              <div className="mt-3 button_wrapper mb-3">
                <button
                  type="submit"
                  className="btn btn-outline-primary"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default WhitelistForm;
