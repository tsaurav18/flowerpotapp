const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Hl47bFp8XOhVxcX85hDAunNmrERxIX871HB49fV0N6PL2BOBuW8w1sZYIVcjq664KiDACzqbJxT2vhUldo2j2z100vMOTZNSm"
);
const admin = require("firebase-admin");
admin.initializeApp();

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", async (request, response) => {
  const snapshot = await admin.firestore().collection("dbproductitems").get();
  const items = [];
  snapshot.forEach((doc) => {
    let id = doc.id;
    let data = doc.data();
    items.push({ id, ...data });
  });

  response.status(200).send(JSON.stringify(items));
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/flowerpotapp-33349/us-central1/api

// http://localhost:5001/flowerpotapp-33349/us-central1/api
