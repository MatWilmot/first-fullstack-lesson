const express = require("express");
const app = express();
const PORT = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client")); // points to client folder

const clientRoutes = require("./routes/client-routes.js");
const apiRoutes = require("./routes/api-routes");

// set up routes as middleware to be used in the server
app.use("/", clientRoutes);
app.use("/", apiRoutes);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
