import React from "react";
import { Login, LoginForm } from "react-admin";
import { withStyles } from "@material-ui/core";

const styles = {
  main: { background: "#F50057" },
  avatar: {
    background: "url(//cdn.example.com/background.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: 80
  },
  hint: {
    marginTop: "1em",
    display: "flex",
    justifyContent: "center"
  },
  icon: { display: "true" }
};

const CustomLoginForm = withStyles({
  button: { background: "#F15922" }
})(LoginForm);

const CustomLoginPage = props => (
  <Login backgroundImage="none" loginform={<CustomLoginForm />} {...props} />
);

export default withStyles(styles)(CustomLoginPage);
