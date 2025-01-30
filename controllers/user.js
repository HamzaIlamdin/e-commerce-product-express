const User = require("../models/User");

const createUser = async (req, res) => {
    const { firstName, lastName, email, userName, password } = req.body;
    const register = await User.create({
        firstName,
        lastName,
        email,
        userName,
        password,
    });
    res.send(register);
}
module.exports = createUser;