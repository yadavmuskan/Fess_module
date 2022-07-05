const {studenthistoryCreate,getStudenthistory} = require("../controllers/history.controllers")

const router=require('express').Router();

router.post("/pay",studenthistoryCreate)
router.get("/",getStudenthistory)

// router.post("/",CreateStudentHistoryRoute)

module.exports=router