const db = require('../db');
const bcrypt = require('bcryptjs');

const saltRounds = 10;
const user = {
    getAll: function(callback) {
        return db.query('SELECT * FROM User', callback);
    },
    getById: function(id, callback) {
        return db.query('SELECT * FROM User WHERE idUser = ?', [id], callback);
    },
    add: function(user, callback) {
        bcrypt.hash(user.password, saltRounds, function(err, hash) {
            if (err) {
                return callback(err);
            }
            return db.query('INSERT INTO User (Username, Password) VALUES (?, ?)', [user.username, hash], callback);
        });
    },
    delete: function(id, callback) {
        return db.query('DELETE FROM User WHERE idUser = ?', [id], callback);
    },
    update: function(id, user, callback) {
        bcrypt.hash(user.password, saltRounds, function(err, hash) {
            if (err) {
                return callback(err);
            }
            return db.query('UPDATE User SET Username = ?, Password = ? WHERE idUser = ?', [user.username, hash, id], callback);
        });
    },
    getByUsername: function(username, callback) {
        return db.query('SELECT * FROM User WHERE Username = ?', [username], callback);
    }
};

module.exports = user;