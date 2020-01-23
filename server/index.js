const express = require("express");

const app = express();

app.use(express.json());

app.use(express.static(`${__dirname}/../build`));

app.get("/api/test", (req, res) => res.status(200).json("You hit me!"));

app.listen(5050, () => console.log("listening on port 5050"));
