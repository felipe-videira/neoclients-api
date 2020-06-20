module.exports = {
    id: {
        type: 'uuid',
        primary: true,
        required: true,
    },
    cpf: {
        type: 'string',
        unique: true,
        required: true,
    },
    name: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,
        email: true
    },
    cellphone: {
        type: 'string',
        required: true,
        length: 11
    },
    telephone: {
        type: 'string',
        length: 10
    },
    deleted: {
        type: 'boolean',
        default: false,
        hidden: true
    }
}
