const elasticsearch = require('elasticsearch');

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


module.exports = cliente;