const mongoose = require('mongoose')
const JobSchema = new mongoose.Schema({
    company:{
        type:String,
        reqired:[true, 'please provide company name'],
        maxlength:50
    },
    position:{
        type:String,
        reqired:[true, 'please provide position name'],
        maxlength:100
    },
    status:{
        type:String,
        enum:['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required:[true, 'please provide user']
    }
}, {timestamps: true})

module.exports = mongoose.model('Job', JobSchema)