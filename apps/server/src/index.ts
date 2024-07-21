import express, { Request, Response } from "express"
import { Notes, Search, Tags } from "@routes"

// import { Notes, Search, Tags } from "./routes"

const app = express();

app.get("/", (_: Request, res: Response): void => {
    res.send("hello world")
})

app.use("/tags", Tags);
app.use("/search", Search);
app.use("/notes", Notes);
app.use("/static", () => {});

app.listen(3000, () => console.log("Listening on port 3000"));
