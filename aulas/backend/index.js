const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.json({
        aluno: 'guilherme',
        curso: 'semana omnistack'
    });
});

app.listen(3333);