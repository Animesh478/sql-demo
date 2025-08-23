const Student = require("./student");
const IdentityCard = require("./identityCard");
const Department = require("./department");

// one to one
Student.hasOne(IdentityCard);
IdentityCard.belongsTo(Student);

module.exports = {
  Student,
  IdentityCard,
};

Department.hasMany(Student);
Student.belongsTo(Department);
