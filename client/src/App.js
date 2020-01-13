import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";
import jsonServerProvider from "ra-data-json-server";

import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import CustomLoginPage from "./components/LoginPage/LoginPage";

import "./App.css";
import authProvider from "./authProvider";

const dataProvider = jsonServerProvider("https://grievance-app.herokuapp.com");
const theme = createMuiTheme({
  palette: {
    type: "dark" // Switching the dark mode on is a single property value change.
  },
  typography: {
    fontFamily: "Titillium Web"
  }
});

function App() {
  return (
    <Admin
      title="Grievances Admin Portal"
      dataProvider={dataProvider}
      theme={theme}
      loginPage={CustomLoginPage}
      authProvider={authProvider}
      dashboard={AdminDashboard}
    >
      <Resource name="users" list={ListGuesser} />
      <Resource name="Departments" list={ListGuesser} />
    </Admin>
  );
}

export default App;
