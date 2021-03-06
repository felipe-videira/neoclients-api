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
    firstName: {
        type: 'string',
        required: true,
    },
    lastName: {
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
        length: 10,
        allow: ['', null]
    },
    deleted: {
        type: 'boolean',
        default: false,
        hidden: true
    }
}
