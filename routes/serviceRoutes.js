const express = require('express');
const router = express.Router();
const Service = require('../models/service');

router.post('/services', async(req, res) => {
    try {
        const {name, description, price} = req.body;
        const service = new Service({name, description, price});
        await service.save();
        res.status(201).json(service);
    } catch(error) {
        res.status(400).json({error : error.message});
    }
});

router.get('/services', async(req, res) => {
    try {
        const service = await Service.find();
        res.status(200).json(service);
    }
    catch {
        res.status(500).json({error : 'failed to fetch services'});
    }
});

router.put('/services/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const {name, description, price} = req.body;
        const service = await Service.findByIdAndUpdate (
            id, 
            {name, description, price},
            {new : true, runValidators: true}
        );
        if (!service) return res.status(404).json({error : "Service does not exist"});
        res.status(200).json(service);
    }
    catch{
        res.status(400).json({error : error.message});
    }
})

router.delete('/services/:id', async(req, res) => {
    try {
        const {id} = req.params;
        const service = await Service.findByIdAndDelete(id);
        if (!service) res.status(404).json({error : "Service can't be deleted"});
        res.status(200).json({message : "Service deleted Successfully"});
    }
    catch {
        res.status(500).json({error : "failed to delete this service"});
    }
})

module.exports = router;