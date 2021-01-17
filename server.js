const express = require("express");
const path = require("path")

// start app and create a port
const app = express();
const PORT = process.env.PORT || 3000;

// handle data parsing and set routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// require routes
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

// start the server using the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));
