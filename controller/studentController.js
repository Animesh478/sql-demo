const db = require("../utils/db-connection");

const addEntries = (req, res) => {
  const { name, email } = req.body;
  const insertQuery = `INSERT INTO Students (name, email) VALUES (?, ?)`;

  db.execute(insertQuery, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    res.status(200).send(`Student with name ${name} successfully added`);
  });
};

const updateEntry = (req, res) => {
  const id = req.params.id;
  const { name, email } = req.body;

  const updateQuery = "UPDATE Students SET name=?, email=? WHERE id=?";

  db.execute(updateQuery, [name, email, id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }

    // handling edge cases
    if (result.affectedRows === 0) {
      res.status(404).send("Student Not Found");
      return;
    }

    // if there are no errors
    res.status(200).send("Student data has been updated");
  });
};

const deleteEntry = (req, res) => {
  const id = req.params.id;
  const deleteQuery = "DELETE FROM Students WHERE id = ?";

  db.execute(deleteQuery, [id], (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).send("Student not found");
      return;
    }

    res.status(200).send(`Student with id ${id} has been deleted`);
  });
};

module.exports = {
  addEntries,
  updateEntry,
  deleteEntry,
};
