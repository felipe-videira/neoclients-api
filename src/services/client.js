const dbService = require('./db');
const { validateCpf } = require('../utils');

module.exports = {
    get: (db, query) => {
        const { filter, limit = 10, page = 1 } = query;

        return dbService.get(db, 'Client', filter, limit, limit * page);
            
    },
    getById: (db, id) => {
        return dbService.getById(db, 'Client', id);
    },
    save: (db, data) => {
        if (!validateCpf(data.cpf)) {
            throw Error('CPF inválido');
        } 

        return dbService.insert(db, 'Client', data);
    },
    update: (db, id, data) => {
        return dbService.update(db, 'Client', { id }, data);
    },
    delete: (db, id) => {
        return dbService.delete(db, 'Client', { id });
    }
}

