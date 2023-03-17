import {
  formResponse,
  loginForm,
  resetFinal,
  resetRequestForm,
  signUpForm,
  staffAllWhitelist,
  staffWhitelistAllAccepted,
  staffWhitelistNotAccepted,
  staffWhitelistRejected,
  updateUserProfile,
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
        setLoggedInStatus(true);
        let newUserData = {
          email: res.data.email,
          role: res.data.role,
          firstName: res.data.firstName,
          lastName: res.data.lastName,
          discordId: res.data.discordId,
          discordLinked: res.data.discordLinked,
        };
        setUser(newUserData);
        setAuthToken(tokens);
        localStorage.setItem("authToken", JSON.stringify(tokens));
        localStorage.setItem("user", JSON.stringify(newUserData));
        //   localStorage.setItem("loggedInStatus", JSON.stringify({ logged: true }));
        return res;
      }
    } catch (error) {
      throw error;
    }
  };
  const updateUsersProfile = async () => {
    try {
      let res = await updateUserProfile();
      let newUserData = {
        email: res.data.email,
        role: res.data.role,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        discordId: res.data.discordId,
        discordLinked: res.data.discordLinked,
      };
      setUser(newUserData);
      localStorage.setItem("user", JSON.stringify(newUserData));
      return res;
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

  let resetRequestFirst = async (data) => {
    try {
      let res = await resetRequestForm(data);
      return res;
    } catch (error) {
      throw error;
    }
  };

  let resetRequestLast = async (data) => {
    try {
      let res = await resetFinal(data);
      return res;
    } catch (error) {
      throw error;
    }
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
    updateUsersProfile: updateUsersProfile,
    resetRequestFirst: resetRequestFirst,
    resetRequestLast: resetRequestLast,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
