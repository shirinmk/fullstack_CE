import express from "express";

const app = express();
const router = express.Router();

app.use(express.static("public"));

router.get("/", (req, res) => {
  res.sendFile("index.html", { root: "public" });
});

app.use(router);
app.listen(5000, () => console.log("Listening on port 5000"));
