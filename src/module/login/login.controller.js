const express = require("express");
const router = express.Router();
const JWT = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { userData } = req;
    delete userData.passwordUser;

    const token = JWT.sign({ id: userData.idUser }, process.env.JWT_SECRET, {
      expiresIn: 3600,
    });

    return res.status(200).send({
      message: "login success",
      token: token,
      userData,
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = router;
