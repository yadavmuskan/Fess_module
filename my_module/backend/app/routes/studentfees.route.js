const {studentfeesCreate,getstudentfees}=require('../controllers/studentfees.controllers');
// const { getstudentfees } = require('../controllers/studentinfo.controllers');

const router=require('express').Router();

router.post("/",studentfeesCreate)
router.get("/",getstudentfees)

module.exports=router 