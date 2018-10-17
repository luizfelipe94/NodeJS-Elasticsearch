module.exports = app => {
    app.get('/', (req, res, next) => {
        res.status(200).send({
            msg: "rota / OK"
        });
    });
};