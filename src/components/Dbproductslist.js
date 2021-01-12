import React, { useState, useEffect } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { db } from "../firebase";

import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { ListView, ListViewHeader } from "@progress/kendo-react-listview";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardBody,
} from "@progress/kendo-react-layout";

function Dbproductslist({ list }) {
  const [{ getId }, dispatch] = useStateValue();
  const EditdbProduct = (idx) => {
    dispatch({
      type: "ADD_PROD_ID",
      item: {
        id: idx,
      },
    });
  };

  const DeletedbProduct = (idx, image) => {
    db.collection("dbproductitems")
      .doc(idx)
      .delete()
      .then(function () {
        console.log("document delete successfully");
      })
      .catch(function (error) {
        console.error("error removing document", error);
      });
  };

  return (
    <>
      <Card orientation="horizontal" style={{ borderWidth: "0px 0px 1px" }}>
        <CardBody
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            paddingRight: "10",
          }}
        >
          <CardTitle style={{ fontSize: 10 }}>
            {" "}
            <img className="checkoutProduct__image" src={list.data.image} />
          </CardTitle>
          {/* <div className="k-hbox k-justify-content-between k-flex-wrap"> */}

          <CardTitle style={{ fontSize: 16 }}>
            {list.data.title.slice(0, 5)}
          </CardTitle>
          <CardSubtitle style={{ fontSize: 16 }}>
            {list.data.price}₹
          </CardSubtitle>

          <Link to={"/edit"}>
            <Button
              variant="contained"
              color="primary"
              className="k-button k-primary"
              style={{ fontSize: 10, padding: 2, width: 50 }}
              onClick={() => EditdbProduct(list.id)}
            >
              Edit
            </Button>
          </Link>
          <Button
            style={{ fontSize: 10, marginLeft: 4, padding: 2, width: 50 }}
            variant="contained"
            color="primary"
            className="k-button"
            onClick={() => DeletedbProduct(list.id)}
          >
            Delete
          </Button>
          {/* </div> */}
        </CardBody>
      </Card>
      {/* <div className="items">
        <List component="nav" aria-label="main mailbox folders">
          <ListItem>
            <ListItemText
              primary={
                <img className="checkoutProduct__image" src={list.data.image} />
              }
            ></ListItemText>
            <ListItemText primary={list.data.title} />
            <ListItemText primary={list.data.price} />

            <Link to={"/edit"}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => EditdbProduct(list.id)}
              >
                Edit
              </Button>
            </Link>

            <Button
              variant="contained"
              color="primary"
              onClick={() => DeletedbProduct(list.id)}
            >
              Delete
            </Button>
          </ListItem>
        </List>
      </div> */}
    </>
  );
}

export default Dbproductslist;
