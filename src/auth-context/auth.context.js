import React from "react";
import PropTypes from "prop-types";
// import {AuthenticationDetails, CognitoUser} from "amazon-cognito-identity-js";

const AuthContext = React.createContext(null);

export const AuthProvider = ({ userData, children }) => {
  let [user, setUser] = React.useState(userData);
  user = typeof user === "string" ? JSON.parse(user) : user;
  //
  // const cognitoUser = new CognitoUser({
  //   Username: email,
  //   Pool: userPool,
  // });
  //
  // const authDetails = new AuthenticationDetails({
  //   Username: email,
  //   Password: password,
  // });
  //
  // return new Promise((resolve, reject) =>
  //     user.authenticateUser(authDetails, {
  //       onSuccess: (session) => {
  //         resolve(session);
  //       },
  //       onFailure: (err) => {
  //         reject(err);
  //       },
  //     })
  // );

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  userData: PropTypes.any,
  children: PropTypes.any,
};

export const useAuth = () => React.useContext(AuthContext);
