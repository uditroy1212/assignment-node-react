const mongoose = require("mongoose");

const User = new mongoose.Schema(
    {
        name: { type: "string", required: true },
        phoneNumber: { type: "string", required: true, unique: true },
    },
    { collation: { locale: "en_US", strength: 1 } }
);

const model = mongoose.model("userData", User);

module.exports = model;
