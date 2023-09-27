import mongoose from 'mongoose'


const pageSchema=mongoose.Schema({
key:{
    type:String,
    unique:true,
},
date:{
    type:Date,
    default:Date.now
},
note:{
    type:String
},
image:{
    type:String
},
audio:{
    type:String
},
video:{
    type:String
},
comments:[{
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    },
    text:{
    type:String,
    },
    date:{
        type:Date,
        default:Date.now
    }
}],
likes:[{
    user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'User',
    },
    category:{
    type:String,
    enum:['cuddle','support'],
    default:'support',
    },
}],
commentsEnabled:{
    type:Boolean,
    default:false
},
hidden:{
    type:Boolean,
    default:false,
},
public:{
    type:Boolean,
    default:true,
},
})


const Page=mongoose.model('Page',pageSchema);

module.exports=Page;