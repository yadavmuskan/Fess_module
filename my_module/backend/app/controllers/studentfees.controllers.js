/*
 * Title:        ITEG Management System
 * Author:       Aryan meena
 * Created Date: Tue Jan 11 2022 19:25:44
 */
"use strict"

const studentfeesModel=require("../models/studentfees.model")

const uuid =require("uuid").v4

class student {
	async studentfeesCreate(req, res) {
		const { Class,Enrollid,Tfees,Deposit,Due} = req.body
		
		const feesid = uuid()
		const payload = {}
		payload["feesid"] = feesid
		Class !=undefined && (payload["Class"]=Class)
		Enrollid!=undefined && (payload["Enrollid"]=Enrollid)
		Tfees != undefined && (payload["Tfees"] = Tfees)
	  Deposit != undefined && (payload["Deposit"] = Deposit)
		Due != undefined && (payload["Due"] = Due)

		try {
			const student = await studentfeesModel.create(payload)
			console.log(student)
			if (student) {
				return res.json({
					status: true,
					msg: "student Fees updated  successfully.",
					data: student,
				})
			}
		} catch (error) {
			if (error.code === 11000) {
				return res.status(406).json({
					status: false,
					msg: "student already exist!",
				})
			}
			console.log(error)
			return res.status(406).json({
				status: false,
				msg: "student creation failed!",
			})
		}
	}

  async getstudentfees(req, res) {
		try {
			const assignment = await studentfeesModel.find()
			if (assignment.length) {
				res.json({
					require: true,
					msg: "assignment retrieved successfully.",
					data: assignment,
				})
			} else {
				res.status(404).json({
					status: false,
					msg: "No assignment found!",
				})
			}
		} catch (error) {
			console.log(error)
			res.status(404).json({
				status: false,
				msg: "No assignment found!",
			})
		}
	}

	async putgetbyid(req, res) {
    console.log(req.params.id);

    studentfeesModel
      .findByIdAndUpdate(
        { _id: req.params.id },
        {
        //   $set: {
        //     due=Due-Deposit
        //   },
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

module.exports=new student()