import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SimpleForm,
  TextInput,
  Edit,
  Create,
  DeleteButton
} from 'react-admin'

// let fakeProps = {
//     basePath: "/",
//     hasCreate: false,
//     hasEdit: false,
//     hasList: true,
//     hasShow: false,
//     history: {},
//     location: { pathname: "/", search: "", hash: "", state: undefined },
//     match: { path: "/", url: "/", isExact: true, params: {} },
//     options: {},
//     permissions: null,
//     resource: "complaint"
// }


export const PostCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source='title' label='Title' />
      <TextInput multiline source='body' label='Body' initialValue="Lorem Ipsum" />
    </SimpleForm>
  </Create>
)

export const PostEdit = (props) => (
  <Edit title='Post Edit' {...props}>
    <SimpleForm>
      <TextInput disabled label='id' source='id' />
      <TextInput source='title' label='Title' />
      <TextInput multiline source='body' label='Body' initialValue="Lorem Ipsum" />
    </SimpleForm>
  </Edit>
)

export const PostList = (props) => (
    <List {...props}>
    <Datagrid>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="body" />
    </Datagrid>
</List>
)