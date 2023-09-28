import mongoose from "mongoose";

const userSchema=mongoose.Schema({
penName:{
    type:String,
    default:'Anonymous',
},
diary:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Diary',
},
following:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
}],
voices:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Voice',
}],
quotes:[{
type:mongoose.Schema.Types.ObjectId,
ref:'Quote',
}],
rewards:[{
   type:String,
}]
})

const User=mongoose.model('User',userSchema)

module.exports=User