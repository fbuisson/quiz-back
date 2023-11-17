const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { log } = require('console');
const app = express();
const port = process.env.PORT || 3000;
const questionList = require('./questionList.js')

let questions = [];
let points = 0;
let difficulty = []

app.use(express.json());
app.use(cors());

app.get('/getQuestions', (req, res) => {
    
        try {
            res.json(questionList);
        } catch (parseError) {
            res.status(500).send("Erreur lors de l'analyse du JSON");
        }
});

app.get('/getSavedQuestions', (req, res) => {
    res.json(questions)
});

app.post('/saveQuestions', (req, res) => {
    questions = req.body;
    res.send("Questions sauvegardées avec succès");
});

app.get('/getSavedDifficulty', (req, res) => {
    res.json(difficulty)
});

app.post('/saveDifficulty', (req, res) => {
    difficulty = req.body;
    res.send("Difficulté sauvegardée avec succès");
});


app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
