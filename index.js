const express = require('express');
const { selecAllQRCodes, insertLink, insertUrlShorted, selectByUrl, selecById, selectAllUrlShortedFrom } = require('./database');

const server = express();

server.use(express.json());

// um método de encurtar uma URL persistindo-a no banco de dados.
server.get("/shortUrl/:url", async (req, res) => {
    var url = req.params.url
    await insertUrlShorted(url).then( result => {
        if (result.length != 0) {
            return res.json(result[0])
        } else {
            return res.status(404).send("URL nao encontrada!");
        }
    }).catch(error => {
        return res.status(404).send("Aconteceu algum erro inesperado!");
    })  
});

// um método que retorna uma url encurtada conforme o encurtamento da URL.
server.get("/shortUrl/url/:value", async (req, res) => {
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
});

// um método que retorna uma url encurtada conforme um id.
server.get("/shortUrl/id/:value", async (req, res) => {
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
});

// um método que retorna todas as URLs encurtadas em uma data específica.
server.get("/shortUrl/all/:date", async (req, res) => {
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
});

server.listen(3333);