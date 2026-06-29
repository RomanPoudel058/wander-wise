//import mongoose from 'mongoose';
//const { Schema, model } = mongoose;
import { Schema, model } from 'mongoose';
import {hash } from 'bcrypt';

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true, //trims whitespace from the beginning and end of the string
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: {
                validator: function(email) {
                    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);
                },
                message: 'Please enter a valid email'
            },
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

UserSchema.pre("save", async function() {
    if (this.isModified("password")) {
        this.password = awaithash(this.password, 10);
    }
});

// Ensure password is hashed on update as well
UserSchema.pre("findOneAndUpdate", async function() {
    if (this.getUpdate().password) {
        this.getUpdate().password = await hash(this.getUpdate().password, 10);
    }
});

const User = model("User", UserSchema);

export default User;