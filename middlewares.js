function printReq(req, res, next){
    const { url, query, params, body, header } = req;
    console.log({url, query , params, body, header});
    next();
}

exports.printReq = printReq;