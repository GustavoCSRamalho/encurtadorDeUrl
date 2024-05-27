const express = require('express');
const { selecAllQRCodes, insertLink, insertUrlShorted, selectByUrl, selecById, selectAllUrlShortedFrom } = require('./database');

const server = express();

server.use(express.json());

// um método de encurtar uma URL persistindo-a no banco de dados.
server.get("/shortUrl/:url", async (req, res) => {
    var url = req.params.url
    var result = await insertUrlShorted(url)
    return res.json(result);
});

// um método que retorna uma url encurtada conforme o encurtamento da URL.
server.get("/shortUrl/url/:value", async (req, res) => {
    var value = req.params.value
    var result = await selectByUrl(value)
    return res.json(result);
});

// um método que retorna uma url encurtada conforme um id.
server.get("/shortUrl/id/:value", async (req, res) => {
    var value = req.params.value
    var result = await selecById(value)
    
    return res.json(result);
});

// um método que retorna todas as URLs encurtadas em uma data específica.
server.get("/shortUrl/all/:date", async (req, res) => {
    var date = req.params.date
    var result = await selectAllUrlShortedFrom(date)
    return res.json(result);
});

server.listen(3333);