import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { useStateValue } from "./StateProvider";

import Dbproductslist from "./Dbproductslist";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

function ListProductdb() {
  const [{ basket, user }, dispatch] = useStateValue();

  const [dblist, setDblist] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("dbproductitems").onSnapshot((snapshot) =>
        setDblist(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
    } else {
      setDblist([]);
    }
  }, [user]);

  return (
    <div className="listProductdb">
      {dblist?.map((list) => (
        <Dbproductslist list={list} />
      ))}
    </div>
  );
}

export default ListProductdb;
