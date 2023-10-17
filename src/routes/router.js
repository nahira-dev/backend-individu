const express = require("express");
const router = express.Router();
const userController = require("../module/admin/admin.controller");
const userLogin = require("../module/login/login.controller");
const creteUserController = require("../module/admin/user.controller");
const { ValidateLogin } = require("../middlewares/validator");
const { verifyJWT } = require("../middlewares/verifyJwt");

router.use("/users", verifyJWT, userController);
router.use("/create-user", creteUserController);
router.use("/login", ValidateLogin, userLogin);

module.exports = router;
