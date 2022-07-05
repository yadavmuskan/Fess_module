
"use strict"

const {Schema,model}=require("mongoose");
// const { studentinfoCreate } = require("../controllers/");

const studenthistoryschema =Schema(
  {  
    Feesid:{
      type:String,
      require:true,
    },
    Name:{
      type:String,
      require:true,
    },
    Deposit:{
      type:Number,
      require:true,
    },
    Method:{
      type:String,
      default:"CASE",
    },
    Totalf:{
      type:Number,
       default:31500,
    },
    date:{
       type:Date,
       default:() => Date.now() ,
    },
    
  },
  {
    timestamps:{
      createdAt:"cd",
      updatedAt:"ud"
    },
  }
)

const studenthistorymodel = model("Fees_studenthistory",studenthistoryschema,"Fees_studenthistory");

module.exports=studenthistorymodel