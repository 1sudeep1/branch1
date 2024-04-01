// Importing user model
const User = require('../models/user');

// Importing bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

// Controller function for user registration
const registerUser = async (req, res) => {
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: req.body.email });

        if (existingUser) {
            // If user already exists, return an error response
            return res.status(400).json({ msg: 'User already exists' });
        } else {
            // Hash the password
            const hashPassword = await bcrypt.hash(req.body.password, saltRounds);
            req.body.password = hashPassword;

            // If avatar file exists, set it in the request body
            if (req.file) {
                req.body.avatar = req.file.filename;
            }

            // Create a new user
            await User.create(req.body);

            // Respond with a success message
            return res.status(200).json({ msg: 'User registered successfully' });
        }
    } catch (err) {
        // Handle any errors
        console.error(err);
        return res.status(400).json({ msg: 'Registration failed' });
    }
};

// Controller function for user login
const loginUser = async (req, res) => {
    try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email: req.body.email });

        if (!existingUser) {
            // Respond with a error message
            return res.status(400).json({ msg: 'User does not exist' });
        }

        // Compare the entered password with the hashed password stored in the database
        const passwordMatch = await bcrypt.compare(req.body.password, existingUser.password);

        if (passwordMatch) {
            // Respond with a success message
            return res.status(200).json({ msg: 'Login successfull' });
        } else {
            // Respond with a error message
            return res.status(400).json({ msg: 'Login failed' });
        }
    } catch (err) {
        // Handle any errors
        console.error(err);
        return res.status(400).json({ msg: 'Login failed' });
    }
};



module.exports = { registerUser, loginUser };
