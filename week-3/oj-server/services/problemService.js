/*
let problems = [
    {
      id: 1,
      name: "Two Sum", 
      description: "alfdslfs",
      difficulty: "easy"
    }, 
    {
      id: 2,
      name: "Three Sum",
      description: "sfsf",
      difficulty: "medium"
    }
];
*/

const ProblemModel = require('../models/problemModel');

const getProblems = function() {
    return new Promise((resolve, reject) => {
        ProblemModel.find({}, (err, problems) => {
            if (err) {
                reject('err');
            } else {
                resolve(problems);
            }
        });
    });
}

const getProblem = function(id) {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({id: id}, (err, problem) => {
            if (err) {
                reject('err');
            } else {
                resolve(problem);
            }
        });
    });
}

const addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        ProblemModel.findOne({name: newProblem.name}, (err, data) => {
            if (data) {
                reject('Problem already exists!');
            } else {
                ProblemModel.count({}, (err, count) => {
                    newProblem.id = count;
                    const mongoProblem = new ProblemModel(newProblem);
                    mongoProblem.save();
                    resolve(mongoProblem);
                });
            }
        });
    });
}

module.exports = {
    getProblems,
    getProblem,
    addProblem
}