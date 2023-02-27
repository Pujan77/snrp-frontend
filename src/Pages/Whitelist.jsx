import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import axios from "axios";

const Whitelist = () => {
  const initialValues = { name: "", email: "", message: "" };

  const handleSubmit = (values, { resetForm }) => {
    axios
      .post(
        "https://discord.com/api/webhooks/1078212517429522442/S8F3iBjSNNKEXE7LfxSBLvvBsW9pEfJ0q1dA83TPREl4Z-7rvX0k23h_7X0q-iIobCaP",
        {
          content:
            "Hello <@&1078649873127182386>, there is a new whitelist form from username. \nHave a look and proceed.",
          embeds: [
            {
              color: 5814783,
              fields: [
                {
                  name: "Steam name:",
                  value: "steam_name",
                  inline: true,
                },
                {
                  name: "Discord Id",
                  value: "Discord Name",
                  inline: true,
                },
                {
                  name: "Steam HEX",
                  value: "hex",
                  inline: true,
                },
                {
                  name: "Discord Identifier",
                  value: "110011100011111",
                  inline: true,
                },
                {
                  name: "Age",
                  value: "12",
                  inline: true,
                },
                {
                  name: "IRL Name",
                  value: "ABc DEF",
                  inline: true,
                },
                {
                  name: "Character Name",
                  value: "JBC",
                },
                {
                  name: "Character backstory",
                  value: "character backstory. eeverything",
                },
                {
                  name: "Roleplay clip/ Stream link",
                  value: "abc.com",
                },
              ],
              author: {
                name: "Introduction Part",
                icon_url:
                  "https://static.wikia.nocookie.net/gtawiki/images/4/49/LesterCrest-GTAVee.png",
              },
              image: {
                url: "https://static.wikia.nocookie.net/gtawiki/images/4/49/LesterCrest-GTAVee.png",
              },
            },
            {
              color: 16716820,
              fields: [
                {
                  name: "What does roleplay mean to you?",
                  value: "meaning_roleplay",
                },
                {
                  name: "Explain your best roleplay story experience so far",
                  value: "story",
                },
                {
                  name: "Give an example of No Value of Life",
                  value: "fear rp",
                },
                {
                  name: "What is combat logging?",
                  value: "logging",
                },
                {
                  name: "What is combat storing?",
                  value: "storing",
                },
                {
                  name: "Explain example of in-game meta",
                  value: "in game meta",
                },
                {
                  name: "What is the first thing you do upon entering server? Explain",
                  value: "first_thing",
                },
              ],
              author: {
                name: "Roleplay Rule Part",
                icon_url:
                  "https://i.pinimg.com/474x/6d/57/ae/6d57aef0ea538a31da935f36c621afae--auto--gta-online.jpg",
              },
              footer: {
                text: "Supreme Roleplay",
                icon_url:
                  "https://i.pinimg.com/474x/6d/57/ae/6d57aef0ea538a31da935f36c621afae--auto--gta-online.jpg",
              },
              timestamp: "2023-02-24T12:30:00.000Z",
            },
          ],
          username: "Ring ring",
          avatar_url:
            "https://i.pinimg.com/originals/b6/97/2d/b6972d320611abaeb4e15c041667c939.jpg",
          attachments: [],
        }
      )
      .then((response) => {
        console.log(response);
        resetForm();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Required";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.message) {
      errors.message = "Required";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validate={validate}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />

          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />

          <label htmlFor="message">Message</label>
          <Field as="textarea" id="message" name="message" />
          <ErrorMessage name="message" component="div" />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Whitelist;
