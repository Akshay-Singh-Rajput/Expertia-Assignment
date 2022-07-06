const express = require('express');
const cors = require('cors');
const jobsControllers = require('./controllers/job.controller');

const app = express();
app.use(express.json());
app.use(cors());


app.use('/api/jobs', jobsControllers);
app.use('/api/post/job', jobsControllers);


module.exports = app;