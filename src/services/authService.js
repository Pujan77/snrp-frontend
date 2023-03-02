import axios from "axios";

const token = JSON.parse(localStorage.getItem("authToken"));

export const signUpForm = async (data) =>
  // axiosInstance.post(`/api/v1/auth/change-password/`, data);
  axios.post(`${process.env.REACT_APP_BASE_URL}/signup`, data);

export const loginForm = async (data) =>
  // axiosInstance.post(`/api/v1/auth/change-password/`, data);
  axios.post(`${process.env.REACT_APP_BASE_URL}/login`, data);

export const whitelistStatus = async () =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/whitelist`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("authToken")),
    },
  });

export const staffAllWhitelist = async () =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/whitelist-all`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("authToken")),
    },
  });

export const staffWhitelistNotAccepted = async () =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/whitelist-not-accepted`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("authToken")),
    },
  });

export const staffWhitelistRejected = async () =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/whitelist-rejected`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("authToken")),
    },
  });

export const staffWhitelistAllAccepted = async () =>
  axios.get(`${process.env.REACT_APP_BASE_URL}/whitelist-accepted`, {
    headers: {
      Authorization: JSON.parse(localStorage.getItem("authToken")),
    },
  });

export const whitelistForm = async (body) =>
  axios.post(`${process.env.REACT_APP_BASE_URL}/whitelist`, body, {
    headers: {
      Authorization: token,
    },
  });

export const formResponse = async (param, body) =>
  axios.put(`${process.env.REACT_APP_BASE_URL}/whitelist/${param}`, body, {
    headers: {
      Authorization: token,
    },
  });
