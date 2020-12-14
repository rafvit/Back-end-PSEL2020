const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    name:{
        type: String,
        require: true,
    },
    cpf:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
        unique: true,
        lowercase:true,
    },
    senha:{
        type: String,
        required: true,
        select: false,
    },
    foto:{
        type: String,
    },

});

const User = mongoose.model('User', UserSchema);

module.exports = User;