const express = require("express");
const mongoose = require("mongoose");
const validator = require("validator")





const studentsSchema= new mongoose.Schema({
    name : { type: String, required: true, trim: true },
    age: { 
        type : Number,
        validate(value){
            if(value<0 || value ==0){
                throw new Error("Negative Number Cannot Be Defined :(");
            }
        }
    },
    email:{ 
        type : String,
        unique : true,
        required :true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Not a Valid Email");
            }
        }
    },
    phone :{ 
        type : String,
        validate(value){
            if(!validator.isMobilePhone(value,['en-IN'])){
                throw new Error("Not a Valid Mobile");
            }
        }
    },
})
 


const studentsModel = new mongoose.model("studentsModel",studentsSchema);

module.exports = studentsModel; 