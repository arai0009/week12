const functions = require("firebase-functions");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const bookCollection = admin.firestore().collection("books");
      const snapshot = await bookCollection.get();
      const count = snapshot.size;
      res.status(200).send({count: count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});
