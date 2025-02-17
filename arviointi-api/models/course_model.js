const db = require('../db');

const course = {
    getAll: function(callback) {
        return db.query('SELECT * FROM opintojakso', callback);
    },
    getById: function(id, callback) {
        return db.query('SELECT * FROM opintojakso WHERE idOpintojakso = ?', [id], callback);
    },
    add: function(course, callback) {
        return db.query('INSERT INTO opintojakso (koodi, laajuus, nimi) VALUES(?, ?, ?)', [course.koodi, course.laajuus, course.nimi], callback);
    },
    delete: function(id, callback) {
        return db.query('DELETE FROM opintojakso WHERE idOpintojakso = ?', [id], callback);
    },
    update: function(id, course, callback) {
        return db.query('UPDATE opintojakso SET koodi = ?, laajuus = ?, nimi = ? WHERE idOpintojakso = ?', [course.koodi, course.laajuus, course.nimi, id], callback);
    }
};

module.exports = course;