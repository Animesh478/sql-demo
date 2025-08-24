const Course = require("../Models/courses");
const Student = require("../Models/student");

const addCourse = async (req, res) => {
  try {
    const { name } = req.body;
    const course = await Course.create({ name });
    res.status(201).json(course);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Could not add course");
  }
};

const addStudentToCourse = async (req, res) => {
  try {
    const { studentId, courseIds } = req.body;
    const student = await Student.findByPk(studentId);
    const course = await Course.findAll({
      where: {
        id: courseIds,
      },
    });
    await student.addCourses(course);
    const updatedStudent = await Student.findByPk(studentId, {
      include: course,
    });
    res.status(200).json(updatedStudent);
  } catch (error) {}
};

module.exports = {
  addCourse,
  addStudentToCourse,
};
