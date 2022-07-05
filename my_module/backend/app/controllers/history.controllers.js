const studenthistorymodel = require("../models/history.model");
const uuid=require("uuid").v4

// This get api find student information
class history{
  
    async studenthistoryCreate(req, res) {
      const { Deposit, Name, Date,Method,Totalf} = req.body;
  
      const studentHistoryid = uuid();
      const payload = {};
      payload["studentHistoryid"] =studentHistoryid;
      Deposit != undefined && (payload["Deposit"] = Deposit);
      Name != undefined && (payload["Name"] = Name);
      Method != undefined && (payload["Method"] = Method);
      Date != undefined && (payload["Date"] = Date);
      Totalf != undefined && (payload["Totalf"] = Totalf);
  
      try {
        const student = await studenthistorymodel.create(payload);
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
  
    
    async getStudenthistory(req, res) {
      try {
        const assignment = await studenthistorymodel.find()
      {
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
      }
      }
       catch (error) {
        console.log(error)
        res.status(404).json({
          status: false,
          msg: "No assignment found!",
        })
      }
    } 

}
module.exports = new history()
