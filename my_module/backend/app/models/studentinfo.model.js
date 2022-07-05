"use strict"

const {Schema,model}=require("mongoose")

const studentinfoSchema =Schema(
  {
    studentid:{
      type:String,
      require:true,
    },
    Enrollid:{
      type:Number,
      require:true,
    },
    Name:{
      type:String,
      require:true,
    },
    Father:{
      type:String,
      require:true,

    },
    Class:{
      type:String,
      require:true,
    },
    tfees:{
      type:String,
      require:true
    }
  },
  {
    timestamps:{
      createdAt:"cd",
      updatedAt:"ud"
    },
  }
)

const studentinfomodel=model("Fees_studentinfo",studentinfoSchema,"Fees_studentinfo")

module.exports=studentinfomodel