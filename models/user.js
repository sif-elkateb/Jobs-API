const mongoose = require("mongoose");

const bcrypt=require('bcryptjs');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "the username must be provided"],
    minLength: 4,
    maxLength: 50,
  },
  email: {
    type: String,
    unique:true,
    required: [true, "the email must be provided"],
    match: [
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      "you must enter a valid email ",
    ],

  },
  password:{
    type:String,
    required:[true,'password must be provided'],
    minLength:8
  }
});


UserSchema.pre('save',async function(){
    const salt = await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);

})

const UserModel=mongoose.model('User',UserSchema);


module.exports=UserModel
