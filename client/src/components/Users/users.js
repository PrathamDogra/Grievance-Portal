import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  BooleanField,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  DeleteButton
} from "react-admin";

export const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" label="Title" />
      <TextInput
        multiline
        source="body"
        label="Body"
        initialValue="Lorem Ipsum"
      />
    </SimpleForm>
  </Create>
);

export const UserEdit = props => (
  <Edit title="Post Edit" {...props}>
    <SimpleForm>
      <TextInput disabled label="id" source="id" />
      <TextInput source="title" label="Title" />
      <TextInput
        multiline
        source="body"
        label="Body"
        initialValue="Lorem Ipsum"
      />
    </SimpleForm>
  </Edit>
);

export const UserList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" label="Id" />
      <TextField source="username" label="Name" />
      <TextField multiline source="password" />
      <BooleanField source="isDeleted" label="Delete" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
