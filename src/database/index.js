const Neode = require('neode');
const path = require('path');

let instance;

module.exports = () => {
    if (!instance) {
        instance = new Neode.fromEnv();

        instance.withDirectory(path.dirname(__dirname) + '/models/neo4j');
    }

    return instance;
}                           