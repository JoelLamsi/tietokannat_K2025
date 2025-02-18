const db = require('../db');

const login = {
    checkPassword: function(username, callback) {
        return db.query('SELECT Password FROM User WHERE Username = ?', [username], callback);
    }
};

module.exports = login;