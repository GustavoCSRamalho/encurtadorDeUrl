/**
 * @module Controller
 */

/**
 * método de encurtar uma URL persistindo-a no banco de dados.
 * @param {string} url - Url usado para ser inserida no banco de dados.
 * @returns {json} - Retorna o valor que foi adicionado no banco de dados.
 */

async function persistirUrlNoBanco(req, res){
    var url = req.params.url
    await insertUrlShorted(url).then( result => {
        if (result.length != 0) {
            return res.json(result[0])
        } else {
            return res.status(404).send("Aconteceu algum erro inesperado!");
        }
    }).catch(error => {
        return res.status(404).send("Aconteceu algum erro inesperado!");
    })  
}


/**
 * método que retorna uma url encurtada conforme o encurtamento da URL.
 * @param {string} urlEncurtada - urlEncurtada usado para recuperar o banco de dados.
 * @returns {json} - Retorna o valor que foi adicionado no banco de dados.
 */
async function recuperarUrlEncurtadaConformeEncurtamento(req, res){
    var value = req.params.value
    await selectByUrl(value).then( result => {
        if (result.length != 0) {
            return res.json(result[0])
        } else {
            return res.status(404).send("URL nao encontrada!");
        }
    }).catch(error => {
        return res.status(404).send("Aconteceu algum erro inesperado!");
    })
}


/**
 *  método que retorna uma url encurtada conforme um id.
 * @param {string} id - Id criado quando a url foi inserida no banco de dados.
 * @returns {json} - Retorna o valor que foi adicionado no banco de dados.
 */
async function recuperarUrlEncurtadaConformeId(req, res){
    var value = req.params.value
    await selecById(value).then( result => {
        if (result.length != 0) {
            return res.json(result[0])
        } else {
            return res.status(404).send("Id nao encontrado!");
        }
    }).catch(error => {
        return res.status(404).send("Aconteceu algum erro inesperado!");
    })    
}


/**
 *  Método que retorna todas as URLs encurtadas em uma data específica.
 * @param {string} data - Data criada quando a url foi inserida no banco de dados.
 * @returns {json} - Retorna todos os valores de acordo com aquela data.
 */
async function recuperarTodasUrlDeAcordoComAData(req, res){
    var date = req.params.date
    await selectAllUrlShortedFrom(date).then( result => {
        if (result.length != 0) {
            return res.json(result)
        } else {
            return res.status(404).send("Nada nessa data!");
        }
    }).catch(error => {
        return res.status(404).send("Aconteceu algum erro inesperado!");
    })  
}

module.exports = {persistirUrlNoBanco, recuperarUrlEncurtadaConformeEncurtamento, recuperarUrlEncurtadaConformeId, recuperarTodasUrlDeAcordoComAData}