const elasticsearch = require('elasticsearch');
//const cities = require('./cities.json');

const cliente = new elasticsearch.Client({
    host: ['http://localhost:9200']
});

cliente.ping({
    requestTimeout: 3000,
}, (error) => {
    if(error){
        console.log('Elasticsearch esta inativo.');
    }else{
        console.log('Elasticsearch ON.');
    }
});

/* cliente.indices.create({
    index: 'cidades',
}, (error, res, status) => {
    if(error){
        console.log(error);
    }else{
        console.log('Index criado', res);
    }
}); */

cliente.index({
    index: 'cidades',
    id: '3',
    type: 'lista_cidades',
    body: {
        "nome": "Belo Horizonte",
    }
}, (err, res, status) => {
    console.log(res);
    process.exit(1);
});

module.exports = cliente;