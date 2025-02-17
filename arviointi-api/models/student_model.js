const db = require('../db');

const student = {
    getAll: function(callback) {
        return db.query('SELECT * FROM opiskelija', callback);
    },
    getById: function(id, callback) {
        return db.query('SELECT * FROM opiskelija WHERE idOpiskelija = ?', [id], callback);
    },
    add: function(student, callback) {
        return db.query('INSERT INTO opiskelija (etunimi, sukunimi, osoite, luokkatunnus) VALUES(?, ?, ?, ?)', [student.etunimi, student.sukunimi, student.osoite, student.luokkatunnus], callback);
    },
    delete: function(id, callback) {
        return db.query('DELETE FROM opiskelija WHERE idOpiskelija = ?', [id], callback);
    },
    update: function(id, student, callback) {
        return db.query('UPDATE opiskelija SET etunimi = ?, sukunimi = ?, osoite = ?, luokkatunnus = ? WHERE idOpiskelija = ?', [student.etunimi, student.sukunimi, student.osoite, student.luokkatunnus, id], callback);
    }
};

module.exports = student;