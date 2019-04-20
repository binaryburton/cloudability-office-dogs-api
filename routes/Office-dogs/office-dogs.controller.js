const fs = require('fs');
let dogData = require('../../data/dogs.json');

exports.getAllDogs = (req, res, next) => {
    try {
        res.status(200).send(dogData);
    } catch (error) {
        res.status(400).send({message: 'Error retreiving all dog data'});
        next(error);
    }   
}

exports.addNewDog = (req, res, next) => {
    try {
        const newDog = {
            _id: req.body._id,
            name: req.body.name,
            owner: req.body.owner,
            notes: req.body.notes
        };
        dogData.push(newDog);
        const data = JSON.stringify(dogData);
        fs.writeFileSync(__dirname + '/../../data/dogs.json', data);
        res.status(200).send({message: 'Successful creation of new dog'});
    } catch (error) {
        res.status(400).send({message: 'Error adding a new dog'});
        next(error);
    }   
}

exports.getSingleDog = (req, res, next) => {
    try {
        for (let i = 0; i < dogData.length; i++) {
            if(req.params.id === dogData[i]._id) {
            res.status(200).send(dogData[i]);
            }
        }
        res.status(400).send({message: 'Error: The dog you are looking for is not in our records'});
    } catch (error) {
        res.status(400).send({message: 'Error trying to find dog'});
        next(error);
    }   
}
exports.updateSingleDog = (req, res, next) => {
    try {
        for (let i = 0; i < dogData.length; i++) {
            if(req.params.id === dogData[i]._id) {
                dogData.pop(dogData[i]);
                const updatedDog = {
                    _id: req.body._id,
                    name: req.body.name,
                    owner: req.body.owner,
                    notes: req.body.notes
                };
                dogData.push(updatedDog);
                const data = JSON.stringify(dogData);
                fs.writeFileSync(__dirname + '/../../data/dogs.json', data);
                res.status(200).send({message: 'Your dog has been updated'});
            }
        }
    } catch (error) {
        res.status(400).send({message: 'Error trying to update your dog'});
        next(error);
    }   
}
exports.deleteSingleDog = (req, res, next) => {
    try {
        for (let i = 0; i < dogData.length; i++) {
            if(req.params.id === dogData[i]._id) {
                dogData.pop(dogData[i]);
                const data = JSON.stringify(dogData);
                fs.writeFileSync(__dirname + '/../../data/dogs.json', data);
                res.status(200).send({message: 'Your dog has been deleted'});
            }
        }
    } catch (error) {
        res.status(400).send({message: 'Error: trying to delete your dog'});
        next(error);
    }   
}