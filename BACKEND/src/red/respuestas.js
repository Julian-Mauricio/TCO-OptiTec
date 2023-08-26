exports.success = function (req, res, mensaje, status) {
    const statusCode = status || 200;
    const mensajeOk = mensaje || '';
    res.status(statusCode).send({
        error: false,
        status: status,
        body: mensajeOk,
    });
};

exports.error = function (req, res, mensaje, status) {
    const statusCode = status || 500;
    const mensajeError = mensaje || 'Error Interno';
    res.status(statusCode).send({
        error: true,
        status: status,
        body: mensajeError,
    });
};