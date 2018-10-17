const elasticsearch = require('elasticsearch');
const cities = require('./cities.json');

const cliente = new elasticsearch.Client({
    host: ['http://localhost:9200']
})

