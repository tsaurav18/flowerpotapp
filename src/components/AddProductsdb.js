import React, { useState } from "react";
import { db } from "../firebase";
import firebaseApp from "firebase";
import { useStateValue } from "./StateProvider";
import { Link, useHistory } from "react-router-dom";
import "../css/AddProductsdb.css";
function AddProductsdb() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  const [id, setId] = useState([]);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("Product Added Successfully");

  const handleChange = (e) => {
    if (e.target.files[0]) {
      let file = e.target.files[0];
      console.log(file);
      let storageRef = firebaseApp.storage().ref("products/" + file.name);
      let uploadTask = storageRef.put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            setImage(downloadURL);
          });
        }
      );
    }
  };
  //get id count

  db.collection("dbproductitems")
    .get()
    .then((snapshot) => {
      setId(snapshot.size);
    });

  //submit data into firebase
  const submitData = (e) => {
    e.preventDefault();
    if (title === "" || image === "" || price === "") {
      alert("Enter the all inputs");
    } else {
      //add data in databases

      db.collection("dbproductitems")
        .add({
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        })
        .then((res) => {
          alert(message);
          setTitle("");
          setImage(null);
          setPrice(0);
          setRating(0);
          history.push("/admin");
        });
    }
  };

  return (
    <div className="flex__container">
      <form>
        <h5>title</h5>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <h5>Image</h5>

        <input type="file" onChange={handleChange} />
        {image ? (
          <img width="200" height="200" src={image} alt="upload image" />
        ) : (
          ""
        )}

        <h5>price</h5>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <h5>rating</h5>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
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

export default AddProductsdb;
