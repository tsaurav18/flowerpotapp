import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import { firebaseApp } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "./StateProvider";
import { useHistory } from "react-router-dom";

export function Edit() {
  const [{ getId }, dispatch] = useStateValue();
  const data = getId.map((item) => item.id);

  return (
    <>
      <EditProduct idx={data[data.length - 1]} />
    </>
  );
}

function EditProduct(idx) {
  const history = useHistory();
  const [{ getId }, dispatch] = useStateValue();
  const [id, setId] = useState(0);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState("Product Added Successfully");

  useEffect(() => {
    if (idx) {
      db.collection(`dbproductitems`)
        .doc(`${idx.idx}`)
        .get()
        .then((doc) => {
          if (doc.exists) {
            const document = doc.data();
            setId(doc.id);
            setTitle(document.title);
            setImage(document.image);
            setPrice(document.price);
          } else {
            console.log("no documents found");
          }
        });
    } else {
      console.log("hello");
    }
  }, []);

  const handleChange = (e) => {
    if (e.target.files[0]) {
      let file = e.target.files[0];
      let storageRef = firebaseApp.storage().ref("products/" + file.name);
      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            setImage(downloadURL);
          });
        }
      );
    }
  };

  //submit data
  const submitData = (e) => {
    e.preventDefault();
    if (id == "" || title == "" || price == "") {
      alert("Enter the all inputs");
    } else {
      //add data in databases
      db.collection("dbproductitems")
        .doc(`${idx.idx}`)
        .set({
          id: id,
          title: title,
          image: image,
          price: price,
        })
        .then((res) => {
          alert(message);
          setTitle("");
          setImage("");
          setPrice(0);

          history.push("admin");
        })
        .catch((error) => {
          console.log("error editing document", error);
        });
    }
  };

  return (
    <div>
      {/* edit product here */}
      <form>
        <h5>title</h5>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <h5>Image</h5>

        <input type="file" onChange={handleChange} />
        <img
          src={image || "http://via.placeholder.com/400x100"}
          alt="upload image"
        />
        <h5>price</h5>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button
          type="submit"
          onClick={submitData}
          className="login__signInButton"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
