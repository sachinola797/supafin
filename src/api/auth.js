import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser,
  AuthenticationDetails,
} from "amazon-cognito-identity-js";
const poolData = {
  UserPoolId: "us-east-1_2rh4gTd7z",
  ClientId: "opqcoufpe25fo72eqnquerslo",
};

const userPool = new CognitoUserPool(poolData);

class AuthApi {
  static Login = (data) => {
    let { email, password } = data;
    const user = new CognitoUser({
      Username: email,
      Pool: userPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    return new Promise((resolve, reject) =>
      user.authenticateUser(authDetails, {
        onSuccess: (session) => {
          resolve(session);
        },
        onFailure: (err) => {
          reject(err);
        },
      })
    );
  };

  static Register = (data) => {
    let { name, email, password, website, company, country } = data;
    let attributeList = [];
    let customAttributeList = [];

    attributeList.push(new CognitoUserAttribute({ Name: "name", Value: name }));
    customAttributeList.push(new CognitoUserAttribute({ Name: "company", Value: company }));
    attributeList.push(new CognitoUserAttribute({ Name: "website", Value: website }));
    customAttributeList.push(new CognitoUserAttribute({ Name: "country", Value: country }));

    return new Promise((resolve, reject) =>
      userPool.signUp(email, password, attributeList, customAttributeList, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      })
    );
  };

  static Logout = () => {
    let user = userPool.getCurrentUser();
    new Promise((resolve, reject) => {
      if (user) {
        user.signOut();
        resolve("User Logged out");
      }
      reject("Unable to find the user");
    });
  };
}

export default AuthApi;
