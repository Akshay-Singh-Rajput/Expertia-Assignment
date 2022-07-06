const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema(
    {
        role: { type: String, required: true },
        companyName: { type: String, required: true },
        location: { type: String, required: true },
        nosOfEmployees: { type: String, required: true },
        aboutCompany: { type: String, required: true },
        keySkills: { type: String, required: true },
        aboutJob: { type: String, required: true },
        qualifications: { type: String, required: true },
        date: { type: String, default: new Date().toLocaleDateString() }
    }, {
    timestamps: false,
    versionKey: false
}
);


const Job = mongoose.model('job', jobSchema);

module.exports = Job;