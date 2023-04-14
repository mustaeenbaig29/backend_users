const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    Id: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deleted: { type: Boolean, default: false },
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },

      User_reach: {
    phone: { 
      value: { type: String },
      verified: { type: Boolean }
    },
    email: {
            value: { type: String },
            verified: { type: Boolean }
          }
},

Role: [{ type: String }],
  Verification: {
    Token: { type: String },
    Expiration: { type: Date }
  },
  Instagram_user_name: { type: String },
  Current_Location: {
    type: {
      type: String,
    }
  },
  SSO_used: {
    gmail: { type: Boolean, default: false },
    Facebook: { type: Boolean, default: false },
    instagram: { type: Boolean, default: false }
  },
  Instagram_user_token_api: { type: String },
  user_info: {
    gender: { type: String },
    dob: { type: Date },
    other_info: { type: String }
  },
  Language: { type: String },
  Currency: { type: String }


// Role: [{ type: String }],

});


const User = mongoose.model('user', UserSchema)
module.exports = User

// Id: , createdAt:, updatedAt: , deleted: