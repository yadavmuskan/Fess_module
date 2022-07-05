"use strict"

const {studentinfoCreate,getstudent,getstudentbyid,putgetbyid}=require("../controllers/studentinfo.controllers")

const router = require("express").Router()


router.post("/",studentinfoCreate);
router.get("/",getstudent);
router.get("/:id",getstudentbyid);
router.put("/:id",putgetbyid);

module.exports = router