const { sign, verify } = require("jsonwebtoken");

function generateToken(payload) {
    return sign(payload, process.env.SECRET_JWT);
}

function decodeToken(token) {
    return verify(token, process.env.SECRET_JWT);
}
module.exports = {
    generateToken,
    decodeToken,
};
