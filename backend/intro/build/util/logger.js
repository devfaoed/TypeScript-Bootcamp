"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loger = (req, res, next) => {
    let url = req.url;
    console.log(`${url} was visited`);
    next();
};
exports.default = loger;
