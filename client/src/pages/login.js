import React from "react";
import { GoogleLogin } from "react-google-login";

const responseGoogle = (response) => {
  console.log(response);
};

const Login = () => {
  return (
    <div className="App">
      <form>
        <label for="uname">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
        ></input>

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        ></input>

        <button type="submit">Login</button>
        <label>
          <input type="checkbox" checked="checked" name="remember"></input>
        </label>

        <button type="button" class="cancelbtn">
          Cancel
        </button>
        <span class="psw">Forgot password?</span>
        <GoogleLogin
          clientId="process.env.REACT_APP_GOOGLE_CLIENT_ID"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </form>
    </div>
  );
};

export default Login;
