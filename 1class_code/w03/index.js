// console.log("Hello, world!");
import express from "express";
const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get("/watch", (req, res) => {
    res.send("Hello, from the watch server!");
});

app.post("/", (req, res) => {
    res.send({message: "Hello Post from the server!",
    });
});


app.put("/", (req, res) => {
    res.send("Hello, from the PUT Request");
});

/*
DOMAIN: https://www.youtube.com
ENDPOINT: /watch

? - query object
v=pAsmrKyMqaA

req: {
ip, OS, url, method
query, params, body
}
*/

app.get("/watch", (req, res) => {
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("Hello, from the watch page");
});

// for params

app.get("/params/:itemsID", (req, res) => {
    console.log(req.url);
    console.log(req.query);
    console.log(req.params);
    console.log(req.body);
    res.send("You got to params");
});