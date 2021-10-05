import express from "express";
import bodyParser from "body-parser";
import connect from "./services/db";
import router from "./routes/boletim.route";
import path from 'path';

const app = express();

const db = connect();

app.use('/storage', express.static(path.join(__dirname, '../storage')));
app.use(express.static('public'))
app.use('/static', express.static('public'))




app.use(bodyParser());
app.get("/", (req, res) => {
    res.json("Hello there");
});
app.use("/api/v1", router);

app.listen( 3000);
