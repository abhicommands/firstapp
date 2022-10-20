import React from "react";
import { GoogleLogin } from "react-google-login";
import { LoginGithub } from "react-login-github";
import styles from "./register.css";
import axios from "axios";


const {REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_GITHUB_CLIENT_ID} = process.env;

const Register = () => {
    const googleAuth = async ({ profileObj }) => {
      axios({
        method: "post",
        url: "/auth/google/signup",
        data: {
          googleId: profileObj.googleId,
          email: profileObj.email,
          firstname: profileObj.givenName,
          lastname: profileObj.familyName,
        },
      })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };
    return (
    <div class="form_wrapper">
      <div class="form_container">
        <div class="title_container">
          <h2>Register</h2>
        </div>
        <div class="row clearfix">
          <div class="">
            <div class="input_field">
              <span>
                <i aria-hidden="true" class="fa fa-envelope"></i>
              </span>
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div class="input_field">
              <span>
                <i aria-hidden="true" class="fa fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="input_field">
              <span>
                <i aria-hidden="true" class="fa fa-lock"></i>
              </span>
              <input
                type="password"
                name="password"
                placeholder="Re-type Password"
                required
              />
            </div>
            <div class="row clearfix">
              <div class="col_half">
                <div class="input_field">
                  <span>
                    <i aria-hidden="true" class="fa fa-user"></i>
                  </span>
                  <input type="text" name="name" placeholder="First Name" />
                </div>
              </div>
              <div class="col_half">
                <div class="input_field">
                  <span>
                    <i aria-hidden="true" class="fa fa-user"></i>
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>
            </div>
            <input
              class="button"
              type="submit"
              value="Register"
            />
          </div>
          <GoogleLogin
            clientId={REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="signup"
            onSuccess={googleAuth}
            onFailure={googleAuth}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <LoginGithub
            clientId={REACT_APP_GITHUB_CLIENT_ID}
            onSuccess={googleAuth}
            onFailure={googleAuth}
          />
      </div>
    </div>
  );
};

export default Register;
