"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { Notes, Search, Tags } from "@routes"
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.get("/", (_, res) => {
    res.send("hello world");
});
app.use("/tags", routes_1.Tags);
app.use("/search", routes_1.Search);
app.use("/notes", routes_1.Notes);
app.use("/static", () => { });
app.listen(3000, () => console.log("Listening on port 3000"));
