import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import { createMuiTheme } from "@material-ui/core/styles";

import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import CustomLoginPage from "./components/LoginPage/LoginPage";

import "./App.css";
import authProvider from "./authProvider";

const dataProvider = simpleRestProvider("https://domain.tld/api");
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
      title="Grievences Admin Portal"
      dataProvider={dataProvider}
      theme={theme}
      loginPage={CustomLoginPage}
      authProvider={authProvider}
      dashboard={AdminDashboard}
    >
      <Resource name="Grievances" list={ListGuesser} />
      <Resource name="Departments" list={ListGuesser} />
    </Admin>
  );
}

export default App;
