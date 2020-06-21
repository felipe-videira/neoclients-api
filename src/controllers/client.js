const service = require('../services/client');

module.exports = {
    get: async (req, res) => {
        try {
            const data = await service.get(req.locals.db);
            res.status(data ? 200 : 404).json(data);
        } catch (err) {
            res.status(500).json({ message: err.message });            
        }
    },
    getById: async (req, res) => {
        try {
            const data = await service.getById(req.locals.db, req.params.id);
            res.status(data ? 200 : 404).json(data);
        } catch (err) {
            res.status(500).json({ message: err.message });            
        }
    },
    post: async (req, res) => {
        try {
            const data = await service.save(req.locals.db, req.body);
            res.status(data ? 201 : 400).json({ 
                message: data && 'Cliente criado com sucesso', 
                data
            });
        } catch (err) {
            res.status(500).json({ message: err.message });            
        }
    },
    patch: async (req, res) => {
        try {
            await service.update(req.locals.db, req.params.id, req.body);
            res.status(200).json({ 
                message: 'Cliente atualizado com sucesso' 
            });
        } catch (err) {
            res.status(500).json({ message: err.message });            
        }
    },
    delete: async (req, res) => {
        try {
            await service.delete(req.locals.db, req.params.id);
            res.status(200).json({ 
                message: 'Cliente excluido com sucesso'
            });
        } catch (err) {
            res.status(500).json({ message: err.message });            
        }
    }
}