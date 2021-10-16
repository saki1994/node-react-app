const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });

//user Schema

const languageSchema = new mongoose.Schema({
  polish: String,
  english: String,
});

const Language = new mongoose.model("Language", languageSchema);

app.post("/WordForm", (req, res) => {
  console.log(req.body);

  const { polish, english } = req.body;
  Language.findOne({ english: english }, (err, foundWord) => {
    if (foundWord) {
      res.send({ message: "The sentence already exist" });
    } else {
      const foundWord = new Language({ polish, english });
      foundWord.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Sucessful" });
        }
      });
    }
  });
});

app.listen(6969, () => {
  console.log("Started");
});
