const Student = require('../models/Student.model');

module.exports.studentsController = {
    getStudents: (req, res) => {
        Student.find({})
        .then((data) => res.json(data));
    },
    postStudents: (req, res) => {
        Student.create({
            name: 'Galahad',
            phone: "12345",
            age: 18
        })
        .then(() => res.json("Student posted!"));
    },
    deleteStudents: (req, res) => {
        Student.findByIdAndRemove({
            _id: req.params.id
        })
        .then(() => res.json(`Student id: ${req.params.id} deleted`));
    },
    patchStudents: (req, res) => {
        Student.findByIdAndUpdate(
            {_id: req.params.id},
            { $set: req.body}
        )
        .then(() => res.json("Student is patched!"))
    }
}