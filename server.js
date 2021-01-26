const express = require("express");
const apiRoutes = require("/routes/apiRoutes");
const htmlRoutes = require("/routes/htmlRoutes");

// start app and create a port
const app = express();
const PORT = process.env.PORT || 3001;

// handle data parsing and set routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// require routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// start the server using the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
