import mongoose from "mongoose";
const {objectId} = mongoose.Schema;
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jobHistorySchema = new mongoose.Schema ({

});

const userSchema = mongoose.Schema ({
    name : {
        type: String,
        required: true,
    },
    //phone: {
        //type : Number,
        //required : true,
    //},
    email : {
        type: String,
        required : true,
        unique : true,
    },
    password : {
        type: String,
        required : true,
    },
    isEmployer : {
        type : Boolean,
        required : true,
        default : false,
    },
}, {
    timestamp : true
})

//userSchema.pre ('save', async function {next} {
   // if (!this.isModified('password')) {
 //       next (;)
   // }
    //this.password = await bcrypt.hash (this.password, 10)
//})
   
const User = mongoose.model('User', userSchema);
export default User;