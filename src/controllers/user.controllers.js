
const express = require("express");
const {body, validationResult} = require("express-validator");

const User = require("..models/user.models");

const router = express.Router();

router.post(
    "/",
    body("firstName").trim().not().isEmpty().withMessage("first name can't be empty")
    .isLength({ min: 3, max: 30})
)