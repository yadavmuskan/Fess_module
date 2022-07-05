/*
 * Title:        ITEG Management System
 * Author:       Aryan meena
 * Created Date: Tue Jan 11 2022 19:25:44
 */
"use strict";

// const { db } = require("../models/studentinfo.model")
const studentinfoModel = require("../models/studentinfo.model");
// const StudentFeesModel = require("../models/studentfees.model");

const uuid = require("uuid").v4;

//Create new student fees information
class student {
  async studentinfoCreate(req, res) {
    const { Enrollid, Name, Class, tfees } = req.body;

    const studentid = uuid();
    const payload = {};
    payload["studentid"] = studentid;
    Enrollid != undefined && (payload["Enrollid"] = Enrollid);
    Father != undefined && (payload["Father"] = Father);
    Name != undefined && (payload["Name"] = Name);
    Class != undefined && (payload["Class"] = Class);
    // Father != undefined && (payload["tfees"] = tfees)

    try {
      const student = await studentinfoModel.create(payload);
      console.log(student);
      if (student) {
        return res.json({
          status: true,
          msg: "student created successfully.",
          data: student,
        });
      }
    } catch (error) {
      if (error.code === 11000) {
        return res.status(406).json({
          status: false,
          msg: "student already exist!",
        });
      }
      console.log(error);
      return res.status(406).json({
        status: false,
        msg: "student creation failed!",
      });
    }
  }

  // This get api find student information
  async getstudent(req, res) {
    try {
      const studentinfo = await studentinfoModel.aggregate([
        {
          $lookup: {
            from: "Fees_studentfees",
            localField: "Enrollid",
            foreignField:"Enrollid",
            as:  "Studentfees",
          },
        },
        {
          $unwind: "$Studentfees",
        },
      ]);
      if (studentinfo.length) {
        res.json({
          require: true,
          msg: "Student show information successfully.",
          data: studentinfo,
        });
      } else {
        res.status(404).json({
          status: false,
          msg: "No Student information show!",
        });
      }
    } catch (error) {
      console.log(error);
      res.status(404).json({
        status: false,
        msg: "No assignment found!",
      });
    }
  }

  async getstudentbyid(req, res, next) {
    console.log(req.params.id);
    studentinfoModel
      .findById(req.params.id)
      .then((result) => {
        res.status(200).json({
          studentinfo: result,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          err: error,
        });
      });
  }

  async putgetbyid(req, res) {
    console.log(req.params.id);

    studentinfoModel
      .findByIdAndUpdate(
        { _id: req.params.id },
        {
          $set: {
            Name: req.body.Name,
          },
        }
      )
      .then((result) => {
        res.status(200).json({
          studentinfo_update: result,
        });
      })
      .catch((error) => {
        console.log(error);
        res.status(500).json({
          err: error,
        });
      });
  }
}
module.exports = new student();
