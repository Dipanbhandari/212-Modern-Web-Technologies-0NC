//|LH:8000/
import express from "express";
import lab_router from "./routers/lab_router.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.use("/lab", lab_router);

app.get("/", (req, res)=>{
    // do something
    res.send("Hello to the project");
});
app.get("/bob", (req, res)=>{
    // do something
    res.send("Hello Bob");
});

app.use("", (req, res)=>{
    res.status(404).send("404 Page not found");
})