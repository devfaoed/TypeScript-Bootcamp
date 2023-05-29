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
const ApiRoute = express_1.default.Router();
// importing image api route
const imageRoute_1 = __importDefault(require("./api/imageRoute"));
// importing logger middleware
const logger_1 = __importDefault(require("../utils/logger"));
ApiRoute.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.redirect("/api");
    }
    catch (err) {
        err;
    }
}));
ApiRoute.get("/api", logger_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.status(200).send("welcome to image processing api");
    }
    catch (err) {
    }
}));
ApiRoute.use("/api", logger_1.default, imageRoute_1.default);
exports.default = ApiRoute;
