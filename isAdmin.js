module.exports = function isAdmin(req, resp, next){
    const apiKey = req.query.apiKey

    if(apiKey === 'abcd'){
        next();
    } else {
        return resp.status(401).send('<h1 style="text-align:center;">"Key no valida"</h1>')
    }
}
//mi midleward acomodada aca

