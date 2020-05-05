const express = require("express");
const app = express();
const port = 3000;
const apiV1Messagesrouter = require("./router/messages");
//TO-DO:
// GET:
// Toont een eenvoudige homepage (tip: jade)
app.get("/", (req, res) => res.send("message: homepage"));
app.use("/api/v1/messages", apiV1Messagesrouter);

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`)
);
