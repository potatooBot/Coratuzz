const mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/Coratuzz",{ useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,useFindAndModify :false})
.then(()=>{
    console.log("Database Connected")
})
.catch(err=>{console.log("Rejected Promise")}
)