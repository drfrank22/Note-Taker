const express = require("express");
const routes = require("./routes/routes");

// start app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// handle data parsing and set routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", routes);
app.use("/", routes);

// start the server using the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
