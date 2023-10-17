const express = require("express");
const validator = require("validator");
const { createUser } = require("./admin.service");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newData = req.body;
    if (
      !(
        newData.nameUser &&
        newData.emailUser &&
        newData.passwordUser &&
        newData.tlpUser &&
        newData.addressUser &&
        newData.levelUser &&
        newData.statusUser &&
        newData.fotoUser
      )
    ) {
      return res.status(400).send("some fields are missings");
    }
    const strongPassword = validator.isStrongPassword(newData.passwordUser);
    if (!strongPassword) {
      return res.status(400).send({ message: "password not strong" });
    }

    const user = await createUser(newData);

    res.send({
      data: user,
      message: "create User success",
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
