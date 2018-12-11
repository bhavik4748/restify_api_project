const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const User = mongoose.model('User');


exports.authenticate = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Get user by email address
            const user = await User.findOne({ email });

            //Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if (err)
                    throw err;
                if (isMatch)
                    resolve(user);
                else {
                    //Password is not valid
                    reject('Authenication fail');
                }


            });
        }
        catch (err) {
            reject('Authenication fail');
        }
    }

    );
}