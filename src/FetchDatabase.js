const admin = require("firebase-admin");

// Fetch the service account key JSON file contents
const serviceAccount = require("./service-accounts/serviceAccountKey.json");

// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://potapp-d09d6.firebaseio.com",
});

// As an admin, the app has access to read and write all data, regardless of Security Rules
const db = admin.database();
const ref = db.ref("restricted_access/secret_document");
ref.once("value", function (snapshot) {
  console.log(snapshot.val());
});
export { db, ref };
