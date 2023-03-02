import {
  formResponse,
  loginForm,
  signUpForm,
  staffAllWhitelist,
  staffWhitelistAllAccepted,
  staffWhitelistNotAccepted,
  staffWhitelistRejected,
  whitelistForm,
  whitelistStatus,
} from "../services/authService";

const { createContext, useState } = require("react");

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() =>
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );
  const [authToken, setAuthToken] = useState(() =>
    localStorage.getItem("authToken")
      ? JSON.parse(localStorage.getItem("authToken"))
      : null
  );
  const [loggedInStatus, setLoggedInStatus] = useState(() =>
    localStorage.getItem("user") ? true : false
  );

  const signupUser = async (data) => {
    try {
      let res = await signUpForm(data);
      return res;
    } catch (error) {
      throw error;
    }
  };
  const loginUser = async (data) => {
    try {
      let res = await loginForm(data);
      if (res) {
        let tokens = res.data.token;
        let userData = res.data;
        setLoggedInStatus(true);
        setUser(userData);
        setAuthToken(tokens);
        localStorage.setItem("authToken", JSON.stringify(tokens));
        localStorage.setItem("user", JSON.stringify(userData));
        //   localStorage.setItem("loggedInStatus", JSON.stringify({ logged: true }));
        return res;
      }
    } catch (error) {
      throw error;
    }
  };

  const logOutUser = async () => {
    setLoggedInStatus(false);
    setUser(null);
    setAuthToken(null);
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    // window.location.href = "/";
  };

  let getWhitelistStatus = async () => {
    try {
      let res = whitelistStatus();
      return res;
    } catch (error) {
      throw error;
    }
  };

  let postWhitelistForm = async (body) => {
    try {
      let res = whitelistForm(body);
      return res;
    } catch (error) {
      throw error;
    }
  };

  let staffGetAllWhitelist = async (type) => {
    if (type === 1) {
      try {
        let res = await staffAllWhitelist();
        return res;
      } catch (error) {
        throw error;
      }
    }
    if (type === 2) {
      try {
        let res = await staffWhitelistNotAccepted();
        return res;
      } catch (error) {
        throw error;
      }
    }
    if (type === 3) {
      try {
        let res = await staffWhitelistRejected();
        return res;
      } catch (error) {
        throw error;
      }
    }
    if (type === 4) {
      try {
        let res = await staffWhitelistAllAccepted();
        return res;
      } catch (error) {
        throw error;
      }
    }
  };
  let whitelistResponding = async (param, body) => {
    try {
      let res = formResponse(param, body);
      return res;
    } catch (error) {
      throw error;
    }
  };
  let contextData = {
    signupUser: signupUser,
    authToken: authToken,
    user: user,
    loginUser: loginUser,
    loggedInStatus: loggedInStatus,
    setLoggedInStatus: setLoggedInStatus,
    logOutUser: logOutUser,
    getWhitelistStatus: getWhitelistStatus,
    postWhitelistForm: postWhitelistForm,
    staffGetAllWhitelist: staffGetAllWhitelist,
    whitelistResponding: whitelistResponding,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
