const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes/routes.js')(app);

require('./config/elasticsearch')

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
});