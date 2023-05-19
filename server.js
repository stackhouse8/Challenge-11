const express=require('express');
const app = express();
const fs =require("fs");

const PORT = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public/assets", express.static(__dirname + "/public/assets"));

require("./routes/html-routes")(app);
require("./routes/api-routes")(app);

app.listen(PORT, function() {
    console.log("App Listening")
});