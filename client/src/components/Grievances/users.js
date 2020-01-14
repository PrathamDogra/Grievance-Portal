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
      <TextInput multiline source='body' label='Complaint' initialValue="Lorem Ipsum" />
    </SimpleForm>
  </Edit>
)

export const PostList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" label="Id"/>
      <TextField multiline source='title' label='Title' />
      <TextField multiline source="body" label="Complaint" />
      <TextField multiline source="department"/>
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
)