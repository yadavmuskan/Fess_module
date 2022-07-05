"use strict"

const {Schema,model}=require("mongoose")

const studentfeesSchema =Schema(
  {
    Feesid:{
      type:String,
      require:true,
    },
    Class:{
      type:String,
      require:true,
    },
    Enrollid:{
      type:Number,
      require:true,
    },
    Tfees:{
      type:Number,
      require:true,
    },
    Deposit:{
      type:Number,
      require:true,
    },
    Due:{
      type:Number,
      require:true,
    }
  },
  {
    timestamps:{
      createdAt:"cd",
      updatedAt:"ud"
    },
  }
)

const studentfeesmodel=model("Fees_studentfees",studentfeesSchema,"Fees_studentfees")

module.exports=studentfeesmodel