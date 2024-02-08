const express = require("express");
const app = express();

app.get("/home", (req, res) => {
    return res.send("Hello from home")
})

app.listen(3000, () => {
    console.log("App is running");
});