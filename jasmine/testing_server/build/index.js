"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// seeting up app endpoint
const app = (0, express_1.default)();
// setting up server port
const port = 8000;
// default endpoint
app.get("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield res.status(200).send("hello world");
    }
    catch (err) {
        err;
    }
}));
// listen server on port
app.listen(port, () => {
    console.log(`server started successfully on ${port}`);
});
exports.default = app;
