"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        unique: true
    }
});
exports.default = contactSchema;
