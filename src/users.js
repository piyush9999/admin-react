import React from 'react';
//eslint-disable-next-line
import { Create, Edit, List, Datagrid, TextField, EmailField, UrlField, SimpleForm, TextInput } from 'react-admin';
export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);

export const UserEdit = props => (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
      </SimpleForm>
    </Edit>
  );

  export const UserCreate = props => (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
      </SimpleForm>
    </Create>
  );