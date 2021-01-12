import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ImageField,
  DeleteButton
} from "react-admin";

export const ProductListAdmin = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <ImageField source="image" />

      <TextField source="price" />
      <TextField source="rating" />
      <EditButton basePath="/posts" />
      <DeleteButton basePath="/posts" />
    </Datagrid>
  </List>
);
