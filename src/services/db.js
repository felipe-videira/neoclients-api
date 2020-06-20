module.exports = {
    insert: async (db, modelName, data) => {
        const res = await db.create(modelName, data);

        return res.toJson();
    },
    update: async (db, modelName, query, data) => {
        const node = await db.first(modelName, {
            deleted: false,
            ...query
        });

        if (!node) return;

        const res = await node.update({ 
            ...await node.toJson(),
            ...data
        });

        return res.toJson();
    },
    get: async (db, modelName, query, orderBy, limit, skip) => {
        const res = await db.all(modelName, {
            deleted: false,
            ...query,
        }, orderBy, limit, skip)

        if (!res) return;
        
        return res.toJson();
    },
    getById: async (db, modelName, id) => {
        const res = await db.first(modelName, {
            deleted: false,
            id
        });

        if (!res) return;

        return res.toJson();
    },
    delete: async (db, modelName, query) => {
        const node = await db.first(modelName, {
            deleted: false,
            ...query
        });

        if (!node) return;

        const res = await node.update({ 
            ...await node.toJson(),
            deleted: true 
        });

        return res.toJson();
    }
}