const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');

const MessageSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });
 
module.exports = mongoose.model('Message', MessageSchema);