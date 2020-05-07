const mongoose = require('mongoose');
const bcrypt =  require('bcryptjs');

const RegistroSchema = new mongoose.Schema({
    descricao: String,
    tipo : {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    valor : {
        type: Number,
        required: true
    },
    data : {
        type: Date,
        required: true
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });
 
module.exports = mongoose.model('Registro', RegistroSchema);