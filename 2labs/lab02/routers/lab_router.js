//|LH:8000/lab/

import express from 'express';

const router = express.Router();

router.get("/", (req, res)=>{
    // do something
    res.send("Hello to the lab router");
});

router.get("/name", (req, res)=>{
    // do something
    res.send("Name");
});

router.get("/greeting", (req, res)=>{
    // do something
    res.send("Hello Good day");
});

router.get('/add/:x/:y', (req, res) => {
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);

    res.send(`${x + y}`);
});

router.get('/calculate/:x/:y/:operator', (req, res)=>{
    let x = parseFloat(req.params.x);
    let y = parseFloat(req.params.y);
    let operator = req.params.operator;    
    switch (req.params.operator) {
        case "+": // + OR %2B
            res.send(`${x + y}`);
            break;
        case "-":
            res.send(`${x - y}`);
            break;
        case "*":
            res.send(`${x * y}`);
            break;
        case "/": // OR %2F
            if (y === 0) {
                res.status(400).send("Division by zero is not allowed");
            } else {
                res.send(`${x / y}`);
            }
            break;
        default:
            break;
    }
})
export default router;