const errorHandler = require('../utils/errorHandler');
const Clip = require('../models/Clip');

module.exports.getAll = async function(req, res) {
    const query = {
    };
    if(req.query.name) {
        query.name = req.query.name;
    }
    if(req.query.author) {
        query.author = req.query.author;
    }
    try {
        const clips = await Clip.find(query).sort({author: req.query.sort ? 1 : -1});
        res.status(200).json(clips);
    } catch (error) {
        errorHandler(res, error);
    }
}

module.exports.getById = async function(req, res) {
    try {
        const clip = await Clip.findById(req.params.id);
        res.status(200).json(clip);
    } catch (error) {
        errorHandler(res, error);
    }
}



module.exports.create = async function(req, res) {
    const clip = new Clip({
        name: req.body.name,
        duration: req.body.duration,
        clipId: req.body.clipId,
        author: req.body.author
    });
    try {
        await clip.save();
        res.status(201).json(clip);
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.update = async function(req, res) {
    const updated = {
        name: req.body.name,
        author: req.body.author,
        duration: req.body.duration,
        clipId: req.body.clipId
    };

    try {
        const clip = await Clip.findByIdAndUpdate({_id: req.params.id}, {$set: updated}, {new: true});
        res.status(200).json(clip);
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports.delete = async function(req, res) {
    try {
     await Clip.remove({ _id: req.params.id});
     res.status(200).json({
         message: 'Клип был удален'
     });   
    } catch (error) {
        errorHandler(res, error)
    }
}