const cliente = require('../config/elasticsearch');

exports.createIndex = index => {
    cliente.indices.create({
        index: index,
    }, (error, res, status) => {
        if(error){
            console.log(error);
        }else{
            console.log('Index criado', res);
        }
    });
}

exports.insertData = (index, id, body) => {

    cliente.index({
        index: index,
        id: id,
        type: 'lista_cidades',
        body: body
    }, (err, res, status) => {
        console.log(res);
        process.exit(1);
    });
}

exports.bulk = (req, res) => {

    let estados = [{
        "name": "Rio de Janeiro",
        "uf": "RJ"
    }, {
        "name": "Volta Redonda",
        "uf": "RJ"
    }, {
        "name": "Fernando de Noronha",
        "uf": "RJ"
    }, {
        "name": "Campo Grande",
        "uf": "RJ"
    }];

    let bulk = [];

    estados.forEach(city => {
        bulk.push({index: {
            _index: "cidades",
            _type: "lista_cidades"
        }
    });
        bulk.push(city);
    });

    cliente.bulk({body:bulk}, (err, ress) => {
        if(err){
            res.status(404).send({
                msg: "Bulk falhou: "+ err 
            })
        }else{
            res.status(200).send({
                msg: "Dados inseridos com sucesso. ",
                dados: estados
            })
        }
    });
}

exports.search = (req, res) => {

    var result = [];

    let body = {
        size: 200,
        from: 0, 
        query: {
          match_all: {
              
          }
        }
    }

    cliente.search({index:'cidades', body: body, type:'lista_cidades'})
    .then(results => {
        res.send(results)
    })
    .catch(err => {
        console.log(err);
    });

    return result;
}