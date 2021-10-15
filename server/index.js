const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/languageDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}); () => {
    console.log('Connected to DB');
};


//user Schema

const languageSchema = new mongoose.Schema({
    polish: String,
    english: String
});

const Language = new mongoose.model('Language', languageSchema);

app.post("/WordForm", (req, res) => {
    console.log(req.body);
    
    const {polish, english} = req.body;
    Language.findOne({english:english}, (err, foundWord) => {
        if(foundWord) {
            res.send({message: 'The sentence already exist'})
        } else {
            const foundWord = new Language({polish, english});
            foundWord.save(err => {
                if (err) {
                    res.send(err)
                } else {
                    res.send({message: 'Sucessful'})
                }
            })
        }
    })
});

app.listen(6969, () => {
    console.log('Started')
})