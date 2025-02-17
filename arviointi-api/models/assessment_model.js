const { get } = require('../app');
const db = require('../db');

const assessment = {
    getByStudentId: function(id, callback) {
        return db.query(`SELECT op.etunimi,
                op.sukunimi, op.luokkatunnus, oj.nimi,
                a.arvosana, a.paivamaara
            FROM opiskelija op 
            JOIN arviointi a ON op.idOpiskelija = a.idOpiskelija
            JOIN opintojakso oj ON a.idOpintojakso = oj.idOpintojakso
            WHERE op.idOpiskelija = ?`, [id], callback);
    }
};

module.exports = assessment;