import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.listen(port , () => {
    console.log(`i am running on ${port}`);
});

app.get("/" , (req , res) => {
    res.render("index.ejs");
});

