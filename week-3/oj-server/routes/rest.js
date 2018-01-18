const express = require('express');
const router = express.Router();
const problemService = require('../services/problemService');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.get('/problems', (req, res) => {
    problemService.getProblems()
        .then(problems => res.json(problems));
});

router.get('/problems/:id', (req, res) => {
    console.log(req.params.id);
    const id = req.params.id;
    problemService.getProblem(+id)
        .then(problem => res.json(problem));
});

router.post('/problems', jsonParser, (req, res) => {
    problemService.addProblem(req.body)
        .then(problem => {
            res.json(problem);
        }, (error) => {
            res.status(400).send('Name already exists');
        })
});

module.exports = router;