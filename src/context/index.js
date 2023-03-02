import { AuthProvider } from "./AuthContext";

export const MainProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
