const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('./db');
require('dotenv').config();

const authenticateUser = async (username, password) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM User WHERE Username = ?', [username], (error, dbResult) => {
            if (error) {
                return reject(error);
            } 
            if (dbResult.length === 0) {
                return resolve(false);
            }

            const hashedPassword = dbResult[0].Password;
            bcrypt.compare(password, hashedPassword, (error, isMatch) => {
                if (error) {
                    return reject(error);
                }
                resolve(isMatch ? dbResult[0] : false);
            }); 
        });
    })};

const generateToken = (user) => {
    return jwt.sign({ id: user.idUser, username: user.Username }, process.env.JWT_SECRET, { expiresIn: '1h' })};

const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(403).json({ message: 'No token provided' });
    }

    jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (error, decoded) => {
        if (error) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.userId = decoded.id;
        next();
    });
}

module.exports = { authenticateUser, generateToken, verifyToken };