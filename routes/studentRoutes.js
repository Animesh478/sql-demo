const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.get("/", studentController.getAllEntries);
router.get("/:id", studentController.getEntry);
router.post("/", studentController.addEntries);
router.put("/:id", studentController.updateEntry);
router.delete("/:id", studentController.deleteEntry);

router.post(
  "/addingStudentWithCard",
  studentController.addValuesToStudentAndIdentityTable
);

module.exports = router;
