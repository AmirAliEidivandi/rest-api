import express from "express";

const router = express.Router();

const users = [
    {
        firstName: "AmirAli",
        lastName: "Eidivandi",
        age: 25,
    },
    {
        firstName: "Ali",
        lastName: "Ahmadi",
        age: 20,
    },
];

router.get("/", (req, res) => {
    console.log(users);
    res.send("Hello");
});

router.post("/", (req, res) => {

});

export default router;