const bcrypt = require("bcryptjs");

function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    password = bcrypt.hashSync(password, salt);
    return password;
}

function comparePassword(password, password2) {
    return bcrypt.compareSync(password, password2);
}

module.exports = { hashPassword, comparePassword };
