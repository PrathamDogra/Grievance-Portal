import React from "react";
import { Admin, Resource } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";

import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import CustomLoginPage from "./components/LoginPage/LoginPage";
import { dataProvider } from "./DataProvider/DataProvider";

import "./App.css";
import authProvider from "./authProvider";

import { PostCreate, PostEdit, PostList } from "./components/Grievances/users";
import { UserCreate, UserList, UserEdit } from "./components/Users/users";

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
      <Resource
        name="complaint"
        list={PostList}
        edit={PostEdit}
        create={PostCreate}
      />
      <Resource
        name="users"
        list={UserList}
        edit={UserEdit}
        create={UserCreate}
      />
    </Admin>
  );
}

export default App;
