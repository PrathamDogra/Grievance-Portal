import React from "react";
import { Admin, Resource, ListGuesser, fetchUtils } from "react-admin";
import { createMuiTheme } from "@material-ui/core/styles";
import jsonServerProvider from "ra-data-json-server";
import simpleRestProvider from 'ra-data-simple-rest';

import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import CustomLoginPage from "./components/LoginPage/LoginPage";

import "./App.css";
import authProvider from "./authProvider";
import {PostCreate, PostEdit, PostList,} from "./components/Grievances/users"


const theme = createMuiTheme({
  palette: {
    type: "dark" // Switching the dark mode on is a single property value change.
  },
  typography: {
    fontFamily: "Titillium Web"
  }
});

// const fetchJson = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   // add your own headers here
//   options.headers.set('X-Total-Count', '319');
//   return fetchUtils.fetchJson(url, options);
// }

// const dataProvider = jsonServerProvider("https://grievance-app.herokuapp.com", fetchJson);
// console.log(dataProvider);
// dataProvider
//     .getOne('complaint', { id: '5e1ca3e252a3090024a59852' })
//     .then(response => {
//         console.log(response.data); // { id: 123, title: "hello, world" }
//     });

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   // add your own headers here
//   options.headers.set('Content-Range', '4063');
//   return fetchUtils.fetchJson(url, options);
// };

const dataProvider = simpleRestProvider("https://grievance-app.herokuapp.com");
dataProvider
    .getOne('complaint', { id: '5e1ca3e252a3090024a59852' })
    .then(response => {
        console.log(response.data); // { id: 123, title: "hello, world" }
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
      <Resource name="complaint" list={PostList} edit={PostEdit} create={PostCreate}/>
      <Resource name="users" list={ListGuesser} />
    </Admin>
  );
}

export default App;
