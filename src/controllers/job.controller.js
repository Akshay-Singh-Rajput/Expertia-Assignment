const express = require('express');
const router = express.Router();


const Job = require('../models/Job.model');

router.get('/', async (req, res) => {
    console.log('get All req');
    const q = req.query;
    const page = req.query.page || 1;
    const pageSize = req.query.pageSize || 5;
    const skip = (page - 1) * pageSize;
    const jobs = await Job.find({}).skip(skip).limit(pageSize).lean().exec();

    res.status(200).send(jobs);
});


router.get('/search', async (req, res) => {
    console.log('search query', req.query);
    const { q, page, loc } = req.query;

    const role = q.charAt(0).toUpperCase() + q.slice(1) || "all";
    const location = loc.charAt(0).toUpperCase() + loc.slice(1) || "all";

    console.log(role, location);


    const p = page || 1;
    const pageSize = req.query.pageSize || 5;
    const skip = (p - 1) * pageSize;
    const jobs = await Job.find({ role, location }).skip(skip).limit(pageSize).lean().exec();
    res.status(200).send(jobs);
});

router.post('/', async (req, res) => {
    console.log('post req');
    const job = await Job.create(req.body);

    res.status(201).send(job);
});

module.exports = router;