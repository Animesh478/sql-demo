const Student = require("./student");
const IdentityCard = require("./identityCard");
const Department = require("./department");
const Course = require("./courses");

// one to one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

// one to many
Department.hasMany(Student);
Student.belongsTo(Department);

// many to many
Course.belongsToMany(Student, { through: "StudentCourse" });
Student.belongsToMany(Course, { through: "StudentCourse" });

module.exports = {
  Student,
  IdentityCard,
  Department,
  Course,
};
