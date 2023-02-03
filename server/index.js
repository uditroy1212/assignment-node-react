var express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const { isEmpty } = require("lodash");
const { getDataFromApi } = require("./callApi");

const User = require("./models/user");
var app = express();
var PORT = 9000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/project-node-react");

app.get("/getUserDetails", getDataFromApi);

const registeration = async (name, phoneNumber) => {
    try {
        await User.create({
            name,
            phoneNumber,
        });
    } catch (err) {
        console.log(err.message);
    }
};

app.post("/loginUser", async (req, res) => {
    try {
        const { name, phoneNumber } = req.body;
        const registerUser = await registeration(name, phoneNumber);
        const filter = {
            name,
            phoneNumber,
        };
        const loginUser = await User.findOne(filter);
        if (!isEmpty(loginUser)) {
            const token = jwt.sign(
                {
                    name: loginUser.name,
                    phoneNumber: loginUser.phoneNumber,
                },
                "secret123"
            );
            res.json({ status: 200, message: "User login Successfully", user: token });
        } else {
            res.json({ status: 404, message: "User login Failed" });
        }
    } catch (err) {
        res.json({ status: 404, message: err.message });
    }
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
