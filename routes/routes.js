const cityCtl = require('../controllers/cityController')

module.exports = app => {
    app.get('/cidades', (req, res, next) => {

        res.status(200).send({
            msg: "rota / OK"
        });
    });

    app.post('/cidades/inserir', (req, res, next) => {

        let city = {
            id: req.body.id,
            name: req.body.name || "Cidade sem nome",
            uf: req.body.uf || "Sem UF"
        };

        if(city.id){
            cityCtl.insertData('cidades', city.id, city);

            res.status(200).send({
                city
            });

        }else{
            res.status(400).send({
                msg: "o ID deve ser preenchido"
            });
        }
    });

    // app.get('/cidades/inserirCidades', (req, res, next) => {

    //     cityCtl.bulk();

    // });

    app.get('/cidades/bulk', cityCtl.bulk);
    app.get('/cidades/search', cityCtl.search);
};